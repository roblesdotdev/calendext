'use client'

import { User } from 'next-auth'
import { signOut } from 'next-auth/react'

type UserMenuProps = {
  user: User
}

export default function UserMenu({ user }: UserMenuProps) {
  return (
    <div className="flex flex-col gap-2">
      <span>{user.name}</span>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  )
}
