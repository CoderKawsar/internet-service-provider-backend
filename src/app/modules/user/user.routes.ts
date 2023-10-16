import { Router } from "express";
import { UserController } from "./user.controllers";

const router = Router();

// register/signup/create/post user
router.post("/", UserController.registerUser);

// login user
router.post("/login", UserController.login);

// refresh token of a user
router.post("/refresh-token", UserController.refreshToken);

export const UserRoutes = router;
