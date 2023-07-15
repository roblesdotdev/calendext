import Link from 'next/link'

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Calendext</h1>
      <Link href="/me">Get started</Link>
    </div>
  )
}
