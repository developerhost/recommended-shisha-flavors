import '@/app/globals.css'

import { Inter } from 'next/font/google'

import { type Metadata } from 'next'
import { CookiesProvider } from 'next-client-cookies/server'

import { getSessionUser } from '@/utils/session'

import ClientProvider from '@/app/_layout/provider'
import UiProvider from '@/app/UiProvider'
import NextAuthProvider from '@/lib/NextAuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'おすすめのシーシャフレーバーを紹介',
  description: 'シーシャフレーバーの組み合わせに迷ったときの参考に',
}

/**
 * ルートレイアウト
 * @param children 子要素
 */
const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const sessionUser = await getSessionUser()
  return (
    <html lang='ja'>
      <NextAuthProvider>
        <body className={inter.className}>
          <CookiesProvider>
            <ClientProvider {...{ sessionUser }}>
              <UiProvider>{children}</UiProvider>
            </ClientProvider>
          </CookiesProvider>
        </body>
      </NextAuthProvider>
    </html>
  )
}

export default RootLayout
