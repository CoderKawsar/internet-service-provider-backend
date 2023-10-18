import { Router } from "express";
import authRole from "../../middlewares/authRole";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { PackageController } from "./package.controller";
import validateRequest from "../../middlewares/validateRequest";
import { PackageValidation } from "./package.validation";

const router = Router();

router.post(
  "/",
  authRole(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(PackageValidation.AddPackageZodSchema),
  PackageController.addPackage
);

router.get("/", PackageController.getAllPackages);

router.get("/:id", PackageController.getPackageById);

router.patch(
  "/:id",
  authRole(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(PackageValidation.UpdatePackageZodSchema),
  PackageController.updatePackage
);

router.delete(
  "/:id",
  authRole(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  PackageController.deletePackage
);

export const PackageRoutes = router;
