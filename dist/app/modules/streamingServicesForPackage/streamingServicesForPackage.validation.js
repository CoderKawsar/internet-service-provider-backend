"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamingServicesForPackageValidation = void 0;
const zod_1 = require("zod");
const AddStreamingServicesForPackageZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        packageId: zod_1.z.string({
            required_error: "Package ID is required!",
        }),
        streamingServiceId: zod_1.z.string({
            required_error: "Streaming service ID is required!",
        }),
    }),
});
const UpdateStreamingServicesForPackageZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        packageId: zod_1.z.string({}).optional(),
        streamingServiceId: zod_1.z.string({}).optional(),
    }),
});
exports.StreamingServicesForPackageValidation = {
    AddStreamingServicesForPackageZodSchema,
    UpdateStreamingServicesForPackageZodSchema,
};
