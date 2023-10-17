import { z } from "zod";
import { userRoles } from "./user.constant";

const registerUserZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required!",
    }),
    email: z.string({
      required_error: "Email is required",
    }),
    password: z.string({
      required_error: "Password is required",
    }),
    role: z.enum([...userRoles] as [string, ...string[]], {
      required_error: "User role is required",
    }),
    contactNo: z.string({
      required_error: "Contact Number is required",
    }),
    district: z.string({
      required_error: "District name is required!",
    }),
    thana: z.string({
      required_error: "Thana name is required!",
    }),
    address: z.string({
      required_error: "Address name is required!",
    }),
  }),
});

const loginZodSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: "Email is required",
    }),
    password: z.string({
      required_error: "Password is required",
    }),
  }),
});

const refreshTokenZodSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: "Refresh Token is required",
    }),
  }),
});

export const UserValidation = {
  registerUserZodSchema,
  loginZodSchema,
  refreshTokenZodSchema,
};
