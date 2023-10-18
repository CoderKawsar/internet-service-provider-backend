import { z } from "zod";

const AddPackageZodSchema = z.object({
  body: z.object({
    speed: z.number({
      required_error: "Package speed is required!",
    }),
    fee: z.number({
      required_error: "Package fee is required!",
    }),
    NoOfPublicIP: z.number({}).optional(),
    talkTime: z.number({}).optional(),
    OTCFee: z.number({
      required_error: "OTC fee is required!",
    }),
    NoOfStreamingServ: z.number({}).optional(),
  }),
});

const UpdatePackageZodSchema = z.object({
  body: z.object({
    speed: z.number({}).optional(),
    fee: z.number({}).optional(),
    NoOfPublicIP: z.number({}).optional(),
    talkTime: z.number({}).optional(),
    OTCFee: z.number({}).optional(),
    NoOfStreamingServ: z.number({}).optional(),
  }),
});

export const PackageValidation = {
  AddPackageZodSchema,
  UpdatePackageZodSchema,
};
