import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters." }),
  // .regex(/[A-Z]/, {
  //   message: "Password must contain at least one uppercase letter.",
  // })
  // .regex(/[a-z]/, {
  //   message: "Password must contain at least one lowercase letter.",
  // })
  // .regex(/[0-9]/, { message: "Password must contain at least one number." })
  // .regex(/[!@#$%^&*(),.?":{}|<>]/, {
  //   message: "Password must contain at least one special character.",
  // }),
});
