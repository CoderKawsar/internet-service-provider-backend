"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamingServicesForPackageRoutes = void 0;
const express_1 = require("express");
const authRole_1 = __importDefault(require("../../middlewares/authRole"));
const user_1 = require("../../../enums/user");
const streamingServicesForPackage_controller_1 = require("./streamingServicesForPackage.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const streamingServicesForPackage_validation_1 = require("./streamingServicesForPackage.validation");
const router = (0, express_1.Router)();
router.post("/", (0, authRole_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(streamingServicesForPackage_validation_1.StreamingServicesForPackageValidation.AddStreamingServicesForPackageZodSchema), streamingServicesForPackage_controller_1.StreamingServiceController.addOneIntoDB);
router.get("/", streamingServicesForPackage_controller_1.StreamingServiceController.getAllFromDB);
router.get("/:id", streamingServicesForPackage_controller_1.StreamingServiceController.getSingleFromDB);
router.patch("/:id", (0, authRole_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(streamingServicesForPackage_validation_1.StreamingServicesForPackageValidation.UpdateStreamingServicesForPackageZodSchema), streamingServicesForPackage_controller_1.StreamingServiceController.updateOneIntoDB);
router.delete("/:id", (0, authRole_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), streamingServicesForPackage_controller_1.StreamingServiceController.deleteOneFromDB);
exports.StreamingServicesForPackageRoutes = router;
