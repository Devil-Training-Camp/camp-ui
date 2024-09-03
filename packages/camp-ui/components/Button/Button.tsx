import type { ReactNode } from 'react'
import styled from 'styled-components'

export interface ButtonProps {
  primary?: boolean
  /**
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large'
  children?: ReactNode
}

const Button = styled.button<{ $primary: ButtonProps['primary'], $size: ButtonProps['size'] }>`
  color: ${props => props.$primary ? props.theme['base-color-gray-0'] : props.theme['base-color-blue-5']};
  border: 1px solid;
  border-color: ${props => props.theme['base-color-blue-5']};
  border-radius: ${props => props.$size === 'small' ? props.theme['base-border-radius-sm'] : props.$size === 'large' ? props.theme['base-border-radius-lg'] : props.theme['base-border-radius-md']};
  padding: ${props => props.$size === 'small' ? '2px 6px' : props.$size === 'large' ? '6px 12px' : '4px 8px'};
  background-color: ${props => props.$primary ? props.theme['base-color-blue-5'] : props.theme['background-color']};
  cursor: pointer;
  &:hover {
    background-color: ${props => props.$primary ? props.theme['base-color-blue-6'] : props.theme['background-color-hover']};
  }
  &:active {
    background-color: ${props => props.$primary ? props.theme['base-color-blue-7'] : props.theme['background-color-active']};
  }
`

export default function ({ primary, size, children }: ButtonProps) {
  return <Button $primary={primary} $size={size}>{children}</Button>
}
