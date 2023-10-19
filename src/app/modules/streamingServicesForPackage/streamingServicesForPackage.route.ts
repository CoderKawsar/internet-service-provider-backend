import { Router } from "express";
import authRole from "../../middlewares/authRole";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { StreamingServiceController } from "./streamingServicesForPackage.controller";
import validateRequest from "../../middlewares/validateRequest";
import { StreamingServicesForPackageValidation } from "./streamingServicesForPackage.validation";

const router = Router();

router.post(
  "/",
  authRole(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(
    StreamingServicesForPackageValidation.AddStreamingServicesForPackageZodSchema
  ),
  StreamingServiceController.addOneIntoDB
);

router.get("/", StreamingServiceController.getAllFromDB);

router.get("/:id", StreamingServiceController.getSingleFromDB);

router.patch(
  "/:id",
  authRole(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(
    StreamingServicesForPackageValidation.UpdateStreamingServicesForPackageZodSchema
  ),
  StreamingServiceController.updateOneIntoDB
);

router.delete(
  "/:id",
  authRole(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StreamingServiceController.deleteOneFromDB
);

export const StreamingServicesForPackageRoutes = router;
