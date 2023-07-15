import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { db } from '~/lib/db'
import { getUserSession } from '~/lib/session'
import { EventCreateInputSchema } from '~/lib/validation'

export async function POST(req: NextRequest) {
  try {
    const user = await getUserSession()

    if (!user) {
      return new Response('Not Authorized', { status: 401 })
    }

    const body = await req.json()

    const { name } = EventCreateInputSchema.parse(body)

    const event = await db.event.create({
      data: {
        name,
      },
      select: {
        id: true,
        name: true,
      },
    })

    return NextResponse.json({ event })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 })
    }
    return new Response('Something went wrong', { status: 500 })
  }
}
