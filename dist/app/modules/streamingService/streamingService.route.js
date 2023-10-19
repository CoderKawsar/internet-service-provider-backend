"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamingServiceRoutes = void 0;
const express_1 = require("express");
const authRole_1 = __importDefault(require("../../middlewares/authRole"));
const user_1 = require("../../../enums/user");
const streamingService_controller_1 = require("./streamingService.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const streamingService_validation_1 = require("./streamingService.validation");
const router = (0, express_1.Router)();
router.post("/", (0, authRole_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(streamingService_validation_1.StreamingServiceValidation.AddStreamingServiceZodSchema), streamingService_controller_1.StreamingServiceController.addStreamingService);
router.get("/", streamingService_controller_1.StreamingServiceController.getAllStreamingServices);
router.get("/:id", streamingService_controller_1.StreamingServiceController.getStreamingService);
router.patch("/:id", (0, authRole_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(streamingService_validation_1.StreamingServiceValidation.UpdateStreamingServiceZodSchema), streamingService_controller_1.StreamingServiceController.updateStreamingService);
router.delete("/:id", (0, authRole_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), streamingService_controller_1.StreamingServiceController.deleteStreamingService);
exports.StreamingServiceRoutes = router;
