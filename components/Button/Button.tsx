import type { ReactNode } from 'react'

interface ButtonProps {
  children?: ReactNode
}

export default function ({ children }: ButtonProps) {
  return <button>{children}</button>
}
