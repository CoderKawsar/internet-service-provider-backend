"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoverageDistrictValidation = void 0;
const zod_1 = require("zod");
const AddOrUpdateCoverageDistrictZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        district: zod_1.z.string({
            required_error: "District Name is required!",
        }),
    }),
});
exports.CoverageDistrictValidation = {
    AddOrUpdateCoverageDistrictZodSchema,
};
