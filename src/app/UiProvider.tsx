'use client'

import { NextUIProvider } from '@nextui-org/react'

/**
 * NextUiを使用するためのProvider
 * @param children ReactNode
 */
const UiProvider = ({ children }: { children: React.ReactNode }) => (
  <NextUIProvider>{children}</NextUIProvider>
)

export default UiProvider
