import { Router } from "express";
import authRole from "../../middlewares/authRole";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { CoverageUpazillaOrThanaController } from "./coverageUpazillaOrThana.controller";
import validateRequest from "../../middlewares/validateRequest";
import { CoverageUpazillaOrThanaValidation } from "./coverageUpazillaOrThana.validation";

const router = Router();

router.post(
  "/",
  authRole(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(
    CoverageUpazillaOrThanaValidation.AddCoverageUpazillaOrThanaZodSchema
  ),
  CoverageUpazillaOrThanaController.addCoverageUpazillaOrThana
);

router.get(
  "/",
  CoverageUpazillaOrThanaController.getAllCoverageUpazillaOrThanas
);

router.get(
  "/district/:districtId",
  CoverageUpazillaOrThanaController.getUpazillaOrThanasByDistrictId
);

router.get(
  "/:id",
  CoverageUpazillaOrThanaController.getCoverageUpazillaOrThana
);

router.patch(
  "/:id",
  authRole(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(
    CoverageUpazillaOrThanaValidation.UpdateCoverageUpazillaOrThanaZodSchema
  ),
  CoverageUpazillaOrThanaController.updateCoverageUpazillaOrThana
);

router.delete(
  "/:id",
  authRole(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CoverageUpazillaOrThanaController.deleteCoverageUpazillaOrThana
);

export const CoverageUpazillaOrThanaRoutes = router;
