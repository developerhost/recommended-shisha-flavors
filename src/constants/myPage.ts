import { type Route } from 'next'

/** マイページのコンテンツ */
export const MYPAGE_CONTENT = {
  SETTINGS: 'settings',
} as const

type MyPageContentKey = keyof typeof MYPAGE_CONTENT

type MyPageContentValue = (typeof MYPAGE_CONTENT)[MyPageContentKey]

/** マイページのリンク先 */
export const MYPAGE_LINK = {
  [MYPAGE_CONTENT.SETTINGS]: '/mypage/settings',
} as const satisfies Record<MyPageContentValue, Route<`/mypage/${MyPageContentValue}`>>

/** マイページのタイトル */
export const MYPAGE_CONTENT_ENUM_JA = {
  [MYPAGE_CONTENT.SETTINGS]: '設定',
} as const satisfies Record<MyPageContentValue, string>

/** 設定関連のコンテンツ */
export const SETTING_CONTENT = {
  PROFILE: 'profile',
  ADDRESS: 'address',
  NOTIFICATIONS: 'notifications',
  BANK: 'bank',
  LEAVE: 'leave',
} as const

type SettingContentKey = keyof typeof SETTING_CONTENT

type SettingContentValue = (typeof SETTING_CONTENT)[SettingContentKey]

/** 設定関連のリンク先 */
export const SETTING_LINK = {
  [SETTING_CONTENT.PROFILE]: '/mypage/settings/profile',
  [SETTING_CONTENT.ADDRESS]: '/mypage/settings/address',
  [SETTING_CONTENT.NOTIFICATIONS]: '/mypage/settings/notifications',
  [SETTING_CONTENT.BANK]: '/mypage/settings/bank',
  [SETTING_CONTENT.LEAVE]: '/mypage/settings/leave',
} as const satisfies Record<
  SettingContentValue,
  Route<`/mypage/settings/${SettingContentValue}`>
>

/** 設定関連のタイトル */
export const SETTING_CONTENT_ENUM_JA = {
  [SETTING_CONTENT.PROFILE]: '公開プロフィール設定',
  [SETTING_CONTENT.ADDRESS]: '配送先住所設定',
  [SETTING_CONTENT.NOTIFICATIONS]: '通知設定',
  [SETTING_CONTENT.BANK]: '銀行口座管理',
  [SETTING_CONTENT.LEAVE]: '退会',
} as const satisfies Record<SettingContentValue, string>

/** マイページのコンテンツ */
export const PAGE_CONTENT = {
  ...MYPAGE_CONTENT,
  ...SETTING_CONTENT,
} as const

export type PageContentKey = keyof typeof PAGE_CONTENT

export type PageContentValue = (typeof PAGE_CONTENT)[PageContentKey]

/** マイページのリンク先 */
export const PAGE_LINK = {
  ...MYPAGE_LINK,
  ...SETTING_LINK,
} as const

/** マイページのタイトル */
export const PAGE_CONTENT_ENUM_JA = {
  ...MYPAGE_CONTENT_ENUM_JA,
  ...SETTING_CONTENT_ENUM_JA,
} as const
