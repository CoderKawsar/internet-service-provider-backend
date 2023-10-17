import { z } from "zod";

const AddCoverageUpazillaOrThanaZodSchema = z.object({
  body: z.object({
    upazillaOrThana: z.string({
      required_error: "Upazilla/Thana Name is required!",
    }),
    districtId: z.string({
      required_error: "District ID is required!",
    }),
  }),
});

const UpdateCoverageUpazillaOrThanaZodSchema = z.object({
  body: z.object({
    upazillaOrThana: z.string({}).optional(),
    districtId: z.string({}).optional(),
  }),
});

export const CoverageUpazillaOrThanaValidation = {
  AddCoverageUpazillaOrThanaZodSchema,
  UpdateCoverageUpazillaOrThanaZodSchema,
};
