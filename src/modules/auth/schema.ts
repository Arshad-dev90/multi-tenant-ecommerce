import z from "zod"

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  username: z
    .string()
    .min(3, "username must be atleast 3 characters")
    .max(63, "username must be atmost 63 characters")
    .regex(
      /^[a-z0-9][a-z0-9-]*[a-z0-9]$/,
      "username can only contain lowercase letters, numbers and hyphens. Its must start and end with a letter or number"
    )
    .refine(
      (val) => !val.includes("--"),
      "username cannot contain consecutive hyphens"
    )
    .transform((val) => val.toLowerCase()),
});