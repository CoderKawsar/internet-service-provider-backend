"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
const coverageDistrict_route_1 = require("../modules/coverageDistrict/coverageDistrict.route");
const coverageUpazillaOrThana_route_1 = require("../modules/coverageUpazillaOrThana/coverageUpazillaOrThana.route");
const coverageArea_route_1 = require("../modules/coverageArea/coverageArea.route");
const streamingService_route_1 = require("../modules/streamingService/streamingService.route");
const package_route_1 = require("../modules/packages/package.route");
const customer_route_1 = require("../modules/customer/customer.route");
const streamingServicesForPackage_route_1 = require("../modules/streamingServicesForPackage/streamingServicesForPackage.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/coverage-districts",
        route: coverageDistrict_route_1.CoverageDistrictRoutes,
    },
    {
        path: "/coverage-upazilla-or-thanas",
        route: coverageUpazillaOrThana_route_1.CoverageUpazillaOrThanaRoutes,
    },
    {
        path: "/coverage-areas",
        route: coverageArea_route_1.CoverageAreaRoutes,
    },
    {
        path: "/streaming-services",
        route: streamingService_route_1.StreamingServiceRoutes,
    },
    {
        path: "/packages",
        route: package_route_1.PackageRoutes,
    },
    {
        path: "/streaming-services-for-package",
        route: streamingServicesForPackage_route_1.StreamingServicesForPackageRoutes,
    },
    {
        path: "/users",
        route: user_route_1.UserRoutes,
    },
    {
        path: "/customers",
        route: customer_route_1.CustomerRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
