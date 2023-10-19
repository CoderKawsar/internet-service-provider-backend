import { Router } from "express";
import { UserController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidation } from "./user.validation";
import { ENUM_USER_ROLE } from "../../../enums/user";
import authRole from "../../middlewares/authRole";
import authUserOrRole from "../../middlewares/authUserOrRole";

const router = Router();

// register/signup/create/post user
router.post(
  "/",
  validateRequest(UserValidation.registerUserZodSchema),
  UserController.registerUser
);

// login user
router.post(
  "/login",
  validateRequest(UserValidation.loginZodSchema),
  UserController.login
);

// refresh token of a user
router.post(
  "/refresh-token",
  validateRequest(UserValidation.refreshTokenZodSchema),
  UserController.refreshToken
);

// get all users
router.get(
  "/",
  authRole(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  UserController.getAllUsers
);

// get single user
router.get(
  "/:id",
  authUserOrRole(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  UserController.getSingleUser
);

// update single user
router.patch(
  "/:id",
  authUserOrRole(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  UserController.updateSingleUser
);

// delete single user
router.patch(
  "/:id",
  authRole(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  UserController.deleteSingleUser
);

export const UserRoutes = router;
