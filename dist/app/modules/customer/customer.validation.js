"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerValidation = void 0;
const zod_1 = require("zod");
const AddCustomerZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string({
            required_error: "User Id is required!",
        }),
        coverageAreaId: zod_1.z.string({
            required_error: "Coverage area Id is required!",
        }),
        packageId: zod_1.z.string({
            required_error: "Package Id is required!",
        }),
    }),
});
const UpdateCustomerZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string({}).optional(),
        coverageAreaId: zod_1.z.string({}).optional(),
        packageId: zod_1.z.string({}).optional(),
    }),
});
exports.CustomerValidation = {
    AddCustomerZodSchema,
    UpdateCustomerZodSchema,
};
