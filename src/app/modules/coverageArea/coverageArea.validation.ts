import { z } from "zod";

const AddCoverageAreaZodSchema = z.object({
  body: z.object({
    upazillaOrThanaId: z.string({
      required_error: "Upazilla/Thana ID is required!",
    }),
    area: z.string({
      required_error: "Area is required!",
    }),
  }),
});

const UpdateCoverageAreaZodSchema = z.object({
  body: z.object({
    upazillaOrThanaId: z.string({}).optional(),
    area: z.string({}).optional(),
  }),
});

export const CoverageAreaValidation = {
  AddCoverageAreaZodSchema,
  UpdateCoverageAreaZodSchema,
};
