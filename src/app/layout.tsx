import '@/app/globals.css'
import React from 'react'

import { Inter } from 'next/font/google'

import { type Metadata } from 'next'

import UiProvider from '@/app/UiProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
