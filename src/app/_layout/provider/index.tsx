'use client'

import { type ReactNode } from 'react'

import { SessionProvider } from 'next-auth/react'

import { type SessionUser } from '@/utils/session'

import { AuthProvider } from '@/app/_layout/provider/AuthProvider'

type ClientProviderProps = {
  children: ReactNode
  sessionUser: SessionUser | undefined
}

/**
 * サイト全体に適用するcontextや、client側実行コードを設定するコンポーネント
 * @returns nested providers
 */
const ClientProvider = ({ children, sessionUser }: ClientProviderProps) => (
  <SessionProvider>
    <AuthProvider {...{ sessionUser }}>{children}</AuthProvider>
  </SessionProvider>
)

export default ClientProvider
