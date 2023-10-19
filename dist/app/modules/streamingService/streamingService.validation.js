"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamingServiceValidation = void 0;
const zod_1 = require("zod");
const AddStreamingServiceZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        service: zod_1.z.string({
            required_error: "Service name is required!",
        }),
        photo: zod_1.z.string({}).optional(),
    }),
});
const UpdateStreamingServiceZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        service: zod_1.z.string({}).optional(),
        photo: zod_1.z.string({}).optional(),
    }),
});
exports.StreamingServiceValidation = {
    AddStreamingServiceZodSchema,
    UpdateStreamingServiceZodSchema,
};
