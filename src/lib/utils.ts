import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * クラス名をマージする
 * @param inputs クラス名
 */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
