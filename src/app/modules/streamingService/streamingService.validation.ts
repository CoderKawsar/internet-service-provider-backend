import { z } from "zod";

const AddStreamingServiceZodSchema = z.object({
  body: z.object({
    service: z.string({
      required_error: "Service name is required!",
    }),
    photo: z.string({}).optional(),
  }),
});

const UpdateStreamingServiceZodSchema = z.object({
  body: z.object({
    service: z.string({}).optional(),
    photo: z.string({}).optional(),
  }),
});

export const StreamingServiceValidation = {
  AddStreamingServiceZodSchema,
  UpdateStreamingServiceZodSchema,
};
