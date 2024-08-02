'use client'

import { SessionProvider } from 'next-auth/react'

/**
 * 認証情報を提供するためのProvider
 * @param children ReactNode
 */
const NextAuthProvider = ({ children }: { children: React.ReactNode }) => (
  <SessionProvider>{children}</SessionProvider>
)

export default NextAuthProvider
