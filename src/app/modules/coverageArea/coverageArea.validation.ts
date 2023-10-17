import { z } from "zod";

const AddCoverageAreaZodSchema = z.object({
  body: z.object({
    districtId: z.string({
      required_error: "District ID is required!",
    }),
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
    districtId: z
      .string({
        required_error: "District ID is required!",
      })
      .optional(),
    upazillaOrThanaId: z
      .string({
        required_error: "Upazilla/Thana ID is required!",
      })
      .optional(),
    area: z
      .string({
        required_error: "Area is required!",
      })
      .optional(),
  }),
});

export const CoverageAreaValidation = {
  AddCoverageAreaZodSchema,
  UpdateCoverageAreaZodSchema,
};
