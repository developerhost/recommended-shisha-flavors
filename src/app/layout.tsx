import '@/app/globals.css'
import React from 'react'

import { Inter } from 'next/font/google'

import { type Metadata } from 'next'

import UiProvider from '@/app/UiProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'おすすめのシーシャフレーバーを紹介',
  description: 'シーシャフレーバーの組み合わせに迷ったときの参考に',
}

/**
 * ルートレイアウト
 * @param children 子要素
 */
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => (
  <html lang='ja'>
    <body className={inter.className}>
      <UiProvider>{children}</UiProvider>
    </body>
  </html>
)

export default RootLayout
