import { z } from "zod";

const schema = z.object({
  DATABASE_HOST: z.string().min(1),
  DATABASE_PORT: z.coerce.number().default(3306),
  DATABASE_USER: z.string().min(1),
  DATABASE_PASSWORD: z.string().default(""),
  DATABASE_NAME: z.string().min(1),
});

export const env = schema.parse(process.env);