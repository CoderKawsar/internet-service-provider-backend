"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageRoutes = void 0;
const express_1 = require("express");
const authRole_1 = __importDefault(require("../../middlewares/authRole"));
const user_1 = require("../../../enums/user");
const package_controller_1 = require("./package.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const package_validation_1 = require("./package.validation");
const router = (0, express_1.Router)();
router.post("/", (0, authRole_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(package_validation_1.PackageValidation.AddPackageZodSchema), package_controller_1.PackageController.addPackage);
router.get("/", package_controller_1.PackageController.getAllPackages);
router.get("/:id", package_controller_1.PackageController.getPackageById);
router.patch("/:id", (0, authRole_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(package_validation_1.PackageValidation.UpdatePackageZodSchema), package_controller_1.PackageController.updatePackage);
router.delete("/:id", (0, authRole_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), package_controller_1.PackageController.deletePackage);
exports.PackageRoutes = router;
