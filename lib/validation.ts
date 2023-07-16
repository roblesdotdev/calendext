import { z } from 'zod'

export const EventCreateInputSchema = z.object({
  name: z.string().min(3),
})

export type EventCreateInput = z.infer<typeof EventCreateInputSchema>

export const EventCreateResponseSchema = z.object({
  id: z.string().nonempty(),
  name: z.string().nonempty(),
})

export type EventCreateResponse = z.infer<typeof EventCreateResponseSchema>

export const EventUpdateSchema = z.object({
  name: z.string().min(3),
  content: z.any().optional().nullable(),
  endAt: z.string().optional().nullable(),
  startAt: z.string().optional().nullable(),
})

export type EventUpdateResponse = z.infer<typeof EventUpdateSchema>

export type EventUpdateInput = z.infer<typeof EventUpdateSchema>
