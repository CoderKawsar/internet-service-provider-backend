import { Router } from "express";
import authRole from "../../middlewares/authRole";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { StreamingServiceController } from "./streamingService.controller";
import validateRequest from "../../middlewares/validateRequest";
import { StreamingServiceValidation } from "./streamingService.validation";

const router = Router();

router.post(
  "/",
  authRole(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(StreamingServiceValidation.AddStreamingServiceZodSchema),
  StreamingServiceController.addStreamingService
);

router.get("/", StreamingServiceController.getAllStreamingServices);

router.get("/:id", StreamingServiceController.getStreamingService);

router.patch(
  "/:id",
  authRole(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(StreamingServiceValidation.UpdateStreamingServiceZodSchema),
  StreamingServiceController.updateStreamingService
);

router.delete(
  "/:id",
  authRole(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StreamingServiceController.deleteStreamingService
);

export const StreamingServiceRoutes = router;
