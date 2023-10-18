import { z } from "zod";

const AddCustomerZodSchema = z.object({
  body: z.object({
    userId: z.string({
      required_error: "User Id is required!",
    }),
    coverageAreaId: z.string({
      required_error: "Coverage area Id is required!",
    }),
    packageId: z.string({
      required_error: "Package Id is required!",
    }),
  }),
});

const UpdateCustomerZodSchema = z.object({
  body: z.object({
    userId: z.string({}).optional(),
    coverageAreaId: z.string({}).optional(),
    packageId: z.string({}).optional(),
  }),
});

export const CustomerValidation = {
  AddCustomerZodSchema,
  UpdateCustomerZodSchema,
};
