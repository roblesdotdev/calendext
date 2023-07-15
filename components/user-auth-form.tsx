'use client'
import { GithubIcon, Loader2 } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function UserAuthForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleAuth = async () => {
    setIsLoading(true)
    try {
      await signIn('github')
    } catch (e) {
      // Show toast error
      console.log((e as Error).message)
    } finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
    }
  }

  return (
    <div className="mt-8 flex w-full max-w-sm flex-col gap-3">
      <button
        disabled={isLoading}
        onClick={handleAuth}
        className="rounded-sm py-3 disabled:opacity-40"
      >
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <GithubIcon className="h-4 w-4" />
            )}
            <span>Github</span>
          </div>
        </div>
      </button>
    </div>
  )
}
