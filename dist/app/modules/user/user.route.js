"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_validation_1 = require("./user.validation");
const user_1 = require("../../../enums/user");
const authRole_1 = __importDefault(require("../../middlewares/authRole"));
const authUserOrRole_1 = __importDefault(require("../../middlewares/authUserOrRole"));
const router = (0, express_1.Router)();
// register/signup/create/post user
router.post("/", (0, validateRequest_1.default)(user_validation_1.UserValidation.registerUserZodSchema), user_controller_1.UserController.registerUser);
// login user
router.post("/login", (0, validateRequest_1.default)(user_validation_1.UserValidation.loginZodSchema), user_controller_1.UserController.login);
// refresh token of a user
router.post("/refresh-token", (0, validateRequest_1.default)(user_validation_1.UserValidation.refreshTokenZodSchema), user_controller_1.UserController.refreshToken);
// get all users
router.get("/", (0, authRole_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), user_controller_1.UserController.getAllUsers);
// get single user
router.get("/:id", (0, authUserOrRole_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), user_controller_1.UserController.getSingleUser);
// update single user
router.patch("/:id", (0, authUserOrRole_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), user_controller_1.UserController.updateSingleUser);
// delete single user
router.patch("/:id", (0, authRole_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), user_controller_1.UserController.deleteSingleUser);
exports.UserRoutes = router;
