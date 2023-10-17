import { Router } from "express";
import authRole from "../../middlewares/authRole";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { CoverageDistrictController } from "./coverageDistrict.controller";
import validateRequest from "../../middlewares/validateRequest";
import { CoverageDistrictValidation } from "./coverageDistrict.validation";

const router = Router();

router.post(
  "/",
  authRole(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(
    CoverageDistrictValidation.AddOrUpdateCoverageDistrictZodSchema
  ),
  CoverageDistrictController.addCoverageDistrict
);

router.get("/", CoverageDistrictController.getAllCoverageDistricts);

router.get("/:id", CoverageDistrictController.getCoverageDistrict);

router.patch(
  "/:id",
  authRole(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(
    CoverageDistrictValidation.AddOrUpdateCoverageDistrictZodSchema
  ),
  CoverageDistrictController.updateCoverageDistrict
);

router.delete(
  "/:id",
  authRole(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CoverageDistrictController.deleteCoverageDistrict
);

export const CoverageDistrictRoutes = router;
