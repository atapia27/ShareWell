/*
usePathname intentionally requires using a Client Component. 
It's important to note Client Components are not a de-optimization. 
They are an integral part of the Server Components architecture.
 */

'use client'
 
import { usePathname } from 'next/navigation'
 
export default function PageURL(): string{
  const pathname = usePathname()
  const isPathname = pathname ? pathname.split('/').pop() : ''
  return isPathname ? isPathname.toUpperCase() : '';
}