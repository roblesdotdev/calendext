import { notFound } from 'next/navigation'
import EventEditor from '~/components/editor'
import { getEventDetail } from '~/lib/events'

type EventDetailPageProps = {
  params: {
    id: string
  }
}

export default async function EventDetailPage({
  params,
}: EventDetailPageProps) {
  const { id } = params
  const event = await getEventDetail(id)

  if (!event) return notFound()

  return (
    <div className="mx-auto max-w-7xl">
      <EventEditor eventData={event} />
      <div className="py-8">
        <button type="submit" form="event-editor-form">
          Save Event
        </button>
      </div>
    </div>
  )
}
