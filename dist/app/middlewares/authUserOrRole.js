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
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../config"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const jwtHelpers_1 = require("../../helpers/jwtHelpers");
const prisma_1 = __importDefault(require("../../shared/prisma"));
const authUserOrRole = (...requiredRoles) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        //get authorization token
        const token = req.headers.authorization;
        if (!token) {
            throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "You are not authorized");
        }
        // verify token
        let verifiedUser = null;
        verifiedUser = jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt.secret);
        const isUserExist = yield prisma_1.default.user.findFirst({
            where: {
                id: verifiedUser === null || verifiedUser === void 0 ? void 0 : verifiedUser.id,
            },
        });
        if (isUserExist) {
            req.user = verifiedUser; // role  , userid
        }
        else {
            req.user = null;
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "User not found!");
        }
        if ((verifiedUser === null || verifiedUser === void 0 ? void 0 : verifiedUser.id) === ((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id)) {
            next();
        }
        else if ((verifiedUser === null || verifiedUser === void 0 ? void 0 : verifiedUser.id) === ((_b = req === null || req === void 0 ? void 0 : req.params) === null || _b === void 0 ? void 0 : _b.userId)) {
            next();
        }
        else if (requiredRoles.length &&
            requiredRoles.includes(verifiedUser.role)) {
            next();
        }
        else {
            throw new ApiError_1.default(http_status_1.default.FORBIDDEN, "Permission denied!");
        }
    }
    catch (error) {
        next(error);
    }
});
exports.default = authUserOrRole;
