"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const config_1 = __importDefault(require("../../../config"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const user_constant_1 = require("./user.constant");
// ======================================================================================
// Register User
// =================================================================================== //
const registerUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const { password } = userData, otherData = __rest(userData, ["password"]);
    // Generate a salt synchronously
    const saltRounds = parseInt(config_1.default.jwt.bcrypt_salt_rounds) || 12;
    const salt = bcrypt_1.default.genSaltSync(saltRounds);
    // Hash the password synchronously
    const hashedPassword = bcrypt_1.default.hashSync(password, salt);
    // creating user
    const result = yield prisma_1.default.user.create({
        data: Object.assign(Object.assign({}, otherData), { password: hashedPassword }),
    });
    // separating password and others data
    const { password: createdPass } = result, dataWithoutPassword = __rest(result, ["password"]);
    // returning others data
    return dataWithoutPassword;
});
// ======================================================================================
// Login User
// =================================================================================== //
const login = (loginInfo) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = loginInfo;
    // is the entered email exists in users
    const isUserExist = yield prisma_1.default.user.findFirst({
        where: { email },
    });
    if (!isUserExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Invalid user!");
    }
    // compare password
    const isPasswordMatched = bcrypt_1.default.compareSync(password, isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.password);
    // if password doesn't match, throw error
    if (!isPasswordMatched) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Invalid credentials!");
    }
    // creating payload for token
    const payload = {
        id: isUserExist.id,
        role: isUserExist.role,
    };
    // creating access token
    const accessToken = jwtHelpers_1.jwtHelpers.createToken(payload, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    // creating refresh token
    const refreshToken = jwtHelpers_1.jwtHelpers.createToken(payload, config_1.default.jwt.refresh_secret, config_1.default.jwt.refresh_expires_in);
    return { isPasswordMatched, accessToken, refreshToken };
});
// ======================================================================================
// Refresh token
// =================================================================================== //
const refreshToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    let verifiedToken = null;
    try {
        verifiedToken = jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt.refresh_secret);
    }
    catch (err) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, "Invalid Refresh Token");
    }
    const { userId } = verifiedToken;
    // checking if refresh token's user is deleted
    const isUserExist = yield prisma_1.default.user.findFirst({ where: { id: userId } });
    if (!isUserExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User does not exist");
    }
    //generate new token
    const newAccessToken = jwtHelpers_1.jwtHelpers.createToken({
        id: isUserExist.id,
        role: isUserExist.role,
    }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    return {
        accessToken: newAccessToken,
    };
});
// ======================================================================================
// Get all users
// =================================================================================== //
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.findMany({
        select: user_constant_1.selectedFields,
    });
    return result;
});
// ======================================================================================
// Get single users
// =================================================================================== //
const getSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.findFirst({
        where: { id },
        select: user_constant_1.selectedFields,
    });
    return result;
});
// ======================================================================================
// Update single user
// =================================================================================== //
const updateSingleUser = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.update({
        where: { id },
        data: payload,
        select: user_constant_1.selectedFields,
    });
    return result;
});
// ======================================================================================
// Update single user
// =================================================================================== //
const deleteSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.delete({
        where: { id },
        select: user_constant_1.selectedFields,
    });
    return result;
});
exports.UserService = {
    registerUser,
    login,
    refreshToken,
    getAllUsers,
    getSingleUser,
    updateSingleUser,
    deleteSingleUser,
};
