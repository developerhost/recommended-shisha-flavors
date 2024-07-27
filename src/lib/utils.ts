import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * クラス名をマージする
 * @param inputs クラス名
 */
const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export default cn
