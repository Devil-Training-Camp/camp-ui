import { ThemeProvider } from 'styled-components'
import type { ReactNode } from 'react'
import { light } from './theme'

export interface ThemeProviderProps {
  theme: any
  children?: ReactNode
}

export default function ({ theme, children }: ThemeProviderProps) {
  return <ThemeProvider theme={theme || light}>{ children }</ThemeProvider>
}
