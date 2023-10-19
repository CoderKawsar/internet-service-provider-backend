import { z } from "zod";

const AddStreamingServicesForPackageZodSchema = z.object({
  body: z.object({
    packageId: z.string({
      required_error: "Package ID is required!",
    }),
    streamingServiceId: z.string({
      required_error: "Streaming service ID is required!",
    }),
  }),
});

const UpdateStreamingServicesForPackageZodSchema = z.object({
  body: z.object({
    packageId: z.string({}).optional(),
    streamingServiceId: z.string({}).optional(),
  }),
});

export const StreamingServicesForPackageValidation = {
  AddStreamingServicesForPackageZodSchema,
  UpdateStreamingServicesForPackageZodSchema,
};
