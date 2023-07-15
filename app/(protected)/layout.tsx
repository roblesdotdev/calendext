import type { ReactNode } from 'react'
import UserMenu from '~/components/user-menu'
import { getUserSession } from '~/lib/session'

type PanelLayoutProps = {
  children: ReactNode
}

export default async function PanelLayout({ children }: PanelLayoutProps) {
  const user = await getUserSession()
  return (
    <div>
      <div className="flex items-center justify-between gap-4 px-8 py-4">
        <h1>Logo</h1>
        <div>{user && <UserMenu user={user} />}</div>
      </div>
      <div>{children}</div>
    </div>
  )
}
