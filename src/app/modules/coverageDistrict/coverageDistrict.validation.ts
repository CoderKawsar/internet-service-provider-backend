import { z } from "zod";

const AddOrUpdateCoverageDistrictZodSchema = z.object({
  body: z.object({
    district: z.string({
      required_error: "District Name is required!",
    }),
  }),
});

export const CoverageDistrictValidation = {
  AddOrUpdateCoverageDistrictZodSchema,
};
