'use client'
import React from 'react'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'

const SignOutButton = () => {
  return (
    <div>
          <Button
                className="w-28 -mr-1 "
                onClick={() =>
                  signOut({
                    redirect: true,
                    callbackUrl: `${window.location.origin}/sign-in`,
                  })
                }
                variant="destructive"
              >
                Sign Out
              </Button>
    </div>
  )
}

export default SignOutButton