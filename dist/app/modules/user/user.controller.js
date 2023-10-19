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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const user_service_1 = require("./user.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../../config"));
const user_1 = require("../../../enums/user");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
// ======================================================================================
// Register user
// =================================================================================== //
const registerUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.registerUser(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "User registered successfully!",
        data: result,
    });
}));
// ======================================================================================
// Login user
// =================================================================================== //
const login = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.login(req.body);
    const cookieOptions = {
        secure: config_1.default.env === "production",
        httpOnly: true,
    };
    res.cookie("refreshToken", result.refreshToken, cookieOptions);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "User registered successfully!",
        data: result,
    });
}));
// ======================================================================================
// Refresh token
// =================================================================================== //
const refreshToken = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { refreshToken } = req.cookies;
    const result = yield user_service_1.UserService.refreshToken(refreshToken);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Token refreshed successfully!",
        data: result,
    });
}));
// ======================================================================================
// Get all users
// =================================================================================== //
const getAllUsers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.getAllUsers();
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Users fetched successfully!",
        data: result,
    });
}));
// ======================================================================================
// Get single user
// =================================================================================== //
const getSingleUser = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.getSingleUser(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "User fetched successfully!",
        data: result,
    });
}));
// ======================================================================================
// Update single user
// =================================================================================== //
const updateSingleUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const payload = req.body;
    const currentUser = req === null || req === void 0 ? void 0 : req.user;
    // admin can not update role to super_admin
    if ((currentUser === null || currentUser === void 0 ? void 0 : currentUser.role) === user_1.ENUM_USER_ROLE.ADMIN &&
        (payload === null || payload === void 0 ? void 0 : payload.role) === user_1.ENUM_USER_ROLE.SUPER_ADMIN) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "You can not change your role to super admin!");
    }
    // user and customer cannot update their role
    if (payload.role) {
        if (((currentUser === null || currentUser === void 0 ? void 0 : currentUser.role) === user_1.ENUM_USER_ROLE.CUSTOMER ||
            (payload === null || payload === void 0 ? void 0 : payload.role) === user_1.ENUM_USER_ROLE.USER) &&
            (currentUser === null || currentUser === void 0 ? void 0 : currentUser.role) !== (payload === null || payload === void 0 ? void 0 : payload.role)) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "You can not change your role!");
        }
    }
    const result = yield user_service_1.UserService.updateSingleUser(id, payload);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "User updated successfully!",
        data: result,
    });
}));
// ======================================================================================
// Delete single user
// =================================================================================== //
const deleteSingleUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.deleteSingleUser(req.params.id);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "User deleted successfully!",
        data: result,
    });
}));
exports.UserController = {
    registerUser,
    login,
    refreshToken,
    getAllUsers,
    getSingleUser,
    updateSingleUser,
    deleteSingleUser,
};
