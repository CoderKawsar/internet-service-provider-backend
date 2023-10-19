"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoverageUpazillaOrThanaValidation = void 0;
const zod_1 = require("zod");
const AddCoverageUpazillaOrThanaZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        upazillaOrThana: zod_1.z.string({
            required_error: "Upazilla/Thana Name is required!",
        }),
        districtId: zod_1.z.string({
            required_error: "District ID is required!",
        }),
    }),
});
const UpdateCoverageUpazillaOrThanaZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        upazillaOrThana: zod_1.z.string({}).optional(),
        districtId: zod_1.z.string({}).optional(),
    }),
});
exports.CoverageUpazillaOrThanaValidation = {
    AddCoverageUpazillaOrThanaZodSchema,
    UpdateCoverageUpazillaOrThanaZodSchema,
};
