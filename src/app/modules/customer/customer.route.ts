import { Router } from "express";
import authRole from "../../middlewares/authRole";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { CustomerController } from "./customer.controller";
import validateRequest from "../../middlewares/validateRequest";
import { CustomerValidation } from "./customer.validation";
import authUserOrRole from "../../middlewares/authUserOrRole";

const router = Router();

router.post(
  "/",
  validateRequest(CustomerValidation.AddCustomerZodSchema),
  CustomerController.addCustomer
);

router.get(
  "/",
  authRole(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CustomerController.getAllCustomers
);

router.get(
  "/:id",
  authUserOrRole(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CustomerController.getCustomerById
);

router.patch(
  "/:id",
  authUserOrRole(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(CustomerValidation.UpdateCustomerZodSchema),
  CustomerController.updateCustomer
);

router.delete(
  "/:id",
  authRole(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CustomerController.deleteCustomer
);

export const CustomerRoutes = router;
