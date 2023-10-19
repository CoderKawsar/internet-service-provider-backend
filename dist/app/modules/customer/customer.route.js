"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoutes = void 0;
const express_1 = require("express");
const authRole_1 = __importDefault(require("../../middlewares/authRole"));
const user_1 = require("../../../enums/user");
const customer_controller_1 = require("./customer.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const customer_validation_1 = require("./customer.validation");
const authUserOrRole_1 = __importDefault(require("../../middlewares/authUserOrRole"));
const router = (0, express_1.Router)();
router.post("/", (0, validateRequest_1.default)(customer_validation_1.CustomerValidation.AddCustomerZodSchema), customer_controller_1.CustomerController.addCustomer);
router.get("/", (0, authRole_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), customer_controller_1.CustomerController.getAllCustomers);
router.get("/user/:userId", (0, authUserOrRole_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), customer_controller_1.CustomerController.getCustomerByUserId);
router.get("/:id", (0, authUserOrRole_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), customer_controller_1.CustomerController.getCustomerById);
router.patch("/:id", (0, authUserOrRole_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(customer_validation_1.CustomerValidation.UpdateCustomerZodSchema), customer_controller_1.CustomerController.updateCustomer);
router.delete("/:id", (0, authRole_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), customer_controller_1.CustomerController.deleteCustomer);
exports.CustomerRoutes = router;
