import { NextRequest, NextResponse } from 'next/server'
import { db } from '~/lib/db'
import { getUserSession } from '~/lib/session'
import { EventUpdateSchema } from '~/lib/validation'

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const user = await getUserSession()

    if (!user) {
      return new Response('Not Authorized', { status: 401 })
    }

    const { id } = params
    const event = await db.event.findUnique({ where: { id } })

    if (!event) {
      return new Response('Event not exists', { status: 400 })
    }

    const body = await req.json()
    const payload = EventUpdateSchema.parse(body.data)

    await db.event.update({
      where: {
        id,
      },
      data: {
        ...payload,
      },
    })

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error(e)
    return new Response('Something went wrong', { status: 500 })
  }
}
