import Link from 'next/link'

export default async function MePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 px-4 py-12">
        <h1 className="text-2xl font-bold">Your Events</h1>
        <p>
          You don&apos;t have any events created yet! Start by{' '}
          <Link className="underline" href="/me/e/create">
            creating one now!
          </Link>
        </p>
      </div>
    </div>
  )
}
