import { z } from 'zod'

let envSchema = z.object({
  DATABASE_URL: z.string().nonempty(),
  // GOOGLE_CLIENT_ID: z.string().nonempty(),
  // GOOGLE_CLIENT_SECRET: z.string().nonempty(),
  GITHUB_CLIENT_ID: z.string().nonempty(),
  GITHUB_CLIENT_SECRET: z.string().nonempty(),
  NEXTAUTH_SECRET: z.string().optional(),
  NEXTAUTH_URL: z.string().optional(),
})

export const env = envSchema.parse(process.env)
