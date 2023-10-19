"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageValidation = void 0;
const zod_1 = require("zod");
const AddPackageZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        speed: zod_1.z.number({
            required_error: "Package speed is required!",
        }),
        fee: zod_1.z.number({
            required_error: "Package fee is required!",
        }),
        NoOfPublicIP: zod_1.z.number({}).optional(),
        talkTime: zod_1.z.number({}).optional(),
        OTCFee: zod_1.z.number({
            required_error: "OTC fee is required!",
        }),
        NoOfStreamingServ: zod_1.z.number({}).optional(),
    }),
});
const UpdatePackageZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        speed: zod_1.z.number({}).optional(),
        fee: zod_1.z.number({}).optional(),
        NoOfPublicIP: zod_1.z.number({}).optional(),
        talkTime: zod_1.z.number({}).optional(),
        OTCFee: zod_1.z.number({}).optional(),
        NoOfStreamingServ: zod_1.z.number({}).optional(),
    }),
});
exports.PackageValidation = {
    AddPackageZodSchema,
    UpdatePackageZodSchema,
};
