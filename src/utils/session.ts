import 'server-only'

import { getServerSession, type Session } from 'next-auth'

import authOptions from '@/app/api/auth/[...nextauth]/authOptions'

/** セッションユーザーの共通型 */
export type SessionUser = {
  id: string
  name?: string | null
  email?: string | null
  image?: string | null
}

/**
 * 現在の認証セッション情報からユーザー情報を取得します。
 * @returns ユーザー情報またはnull
 */
export const getSessionUser = async (): Promise<SessionUser | undefined> => {
  const session: Session | undefined | null = await getServerSession(authOptions)
  if (!session) return undefined

  return session.user
}
