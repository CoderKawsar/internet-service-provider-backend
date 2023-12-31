"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoverageUpazillaOrThanaRoutes = void 0;
const express_1 = require("express");
const authRole_1 = __importDefault(require("../../middlewares/authRole"));
const user_1 = require("../../../enums/user");
const coverageUpazillaOrThana_controller_1 = require("./coverageUpazillaOrThana.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const coverageUpazillaOrThana_validation_1 = require("./coverageUpazillaOrThana.validation");
const router = (0, express_1.Router)();
router.post("/", (0, authRole_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(coverageUpazillaOrThana_validation_1.CoverageUpazillaOrThanaValidation.AddCoverageUpazillaOrThanaZodSchema), coverageUpazillaOrThana_controller_1.CoverageUpazillaOrThanaController.addCoverageUpazillaOrThana);
router.get("/", coverageUpazillaOrThana_controller_1.CoverageUpazillaOrThanaController.getAllCoverageUpazillaOrThanas);
router.get("/district/:districtId", coverageUpazillaOrThana_controller_1.CoverageUpazillaOrThanaController.getUpazillaOrThanasByDistrictId);
router.get("/:id", coverageUpazillaOrThana_controller_1.CoverageUpazillaOrThanaController.getCoverageUpazillaOrThana);
router.patch("/:id", (0, authRole_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(coverageUpazillaOrThana_validation_1.CoverageUpazillaOrThanaValidation.UpdateCoverageUpazillaOrThanaZodSchema), coverageUpazillaOrThana_controller_1.CoverageUpazillaOrThanaController.updateCoverageUpazillaOrThana);
router.delete("/:id", (0, authRole_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), coverageUpazillaOrThana_controller_1.CoverageUpazillaOrThanaController.deleteCoverageUpazillaOrThana);
exports.CoverageUpazillaOrThanaRoutes = router;
