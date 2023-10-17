import { Router } from "express";
import authRole from "../../middlewares/authRole";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { CoverageAreaController } from "./coverageArea.controller";
import validateRequest from "../../middlewares/validateRequest";
import { CoverageAreaValidation } from "./coverageArea.validation";

const router = Router();

router.post(
  "/",
  authRole(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(CoverageAreaValidation.AddCoverageAreaZodSchema),
  CoverageAreaController.addCoverageArea
);

router.get("/", CoverageAreaController.getAllCoverageAreas);

router.get("/:id", CoverageAreaController.getCoverageArea);

router.patch(
  "/:id",
  authRole(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(CoverageAreaValidation.UpdateCoverageAreaZodSchema),
  CoverageAreaController.updateCoverageArea
);

router.delete(
  "/:id",
  authRole(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CoverageAreaController.deleteCoverageArea
);

export const CoverageAreaRoutes = router;
