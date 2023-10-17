import { z } from "zod";

const AddOrUpdateCoverageUpazillaOrThanaZodSchema = z.object({
  body: z.object({
    upazillaOrThana: z.string({
      required_error: "Upazilla/Thana Name is required!",
    }),
  }),
});

export const CoverageUpazillaOrThanaValidation = {
  AddOrUpdateCoverageUpazillaOrThanaZodSchema,
};
