import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { CoverageDistrictRoutes } from "../modules/coverageDistrict/coverageDistrict.route";
import { CoverageUpazillaOrThanaRoutes } from "../modules/coverageUpazillaOrThana/coverageUpazillaOrThana.route";
import { CoverageAreaRoutes } from "../modules/coverageArea/coverageArea.route";
import { StreamingServiceRoutes } from "../modules/streamingService/streamingService.route";
import { PackageRoutes } from "../modules/packages/package.route";
import { CustomerRoutes } from "../modules/customer/customer.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/coverage-districts",
    route: CoverageDistrictRoutes,
  },
  {
    path: "/coverage-upazilla-or-thanas",
    route: CoverageUpazillaOrThanaRoutes,
  },
  {
    path: "/coverage-areas",
    route: CoverageAreaRoutes,
  },
  {
    path: "/streaming-services",
    route: StreamingServiceRoutes,
  },
  {
    path: "/packages",
    route: PackageRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/customers",
    route: CustomerRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
