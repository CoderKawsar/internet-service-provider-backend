"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoverageAreaValidation = void 0;
const zod_1 = require("zod");
const AddCoverageAreaZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        upazillaOrThanaId: zod_1.z.string({
            required_error: "Upazilla/Thana ID is required!",
        }),
        area: zod_1.z.string({
            required_error: "Area is required!",
        }),
    }),
});
const UpdateCoverageAreaZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        upazillaOrThanaId: zod_1.z.string({}).optional(),
        area: zod_1.z.string({}).optional(),
    }),
});
exports.CoverageAreaValidation = {
    AddCoverageAreaZodSchema,
    UpdateCoverageAreaZodSchema,
};
