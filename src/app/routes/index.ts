import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { CoverageDistrictRoutes } from "../modules/coverageDistrict/coverageDistrict.route";
import { CoverageUpazillaOrThanaRoutes } from "../modules/coverageUpazillaOrThana/coverageUpazillaOrThana.route";
import { CoverageAreaRoutes } from "../modules/coverageArea/coverageArea.route";

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
    path: "/coverage-area",
    route: CoverageAreaRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
