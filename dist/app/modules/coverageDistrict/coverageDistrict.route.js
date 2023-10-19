"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoverageDistrictRoutes = void 0;
const express_1 = require("express");
const authRole_1 = __importDefault(require("../../middlewares/authRole"));
const user_1 = require("../../../enums/user");
const coverageDistrict_controller_1 = require("./coverageDistrict.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const coverageDistrict_validation_1 = require("./coverageDistrict.validation");
const router = (0, express_1.Router)();
router.post("/", (0, authRole_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(coverageDistrict_validation_1.CoverageDistrictValidation.AddOrUpdateCoverageDistrictZodSchema), coverageDistrict_controller_1.CoverageDistrictController.addCoverageDistrict);
router.get("/", coverageDistrict_controller_1.CoverageDistrictController.getAllCoverageDistricts);
router.get("/:id", coverageDistrict_controller_1.CoverageDistrictController.getCoverageDistrict);
router.patch("/:id", (0, authRole_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(coverageDistrict_validation_1.CoverageDistrictValidation.AddOrUpdateCoverageDistrictZodSchema), coverageDistrict_controller_1.CoverageDistrictController.updateCoverageDistrict);
router.delete("/:id", (0, authRole_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), coverageDistrict_controller_1.CoverageDistrictController.deleteCoverageDistrict);
exports.CoverageDistrictRoutes = router;
