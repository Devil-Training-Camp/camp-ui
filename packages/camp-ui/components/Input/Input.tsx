import type { ReactNode } from 'react'
import React from 'react'
import styled from 'styled-components'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  prefix?: ReactNode
  suffix?: ReactNode
}

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.theme['border-color']};
  border-radius: ${props => props.theme['base-border-radius-md']};
  background-color: ${props => props.theme['background-color']};

  &:focus-within {
    border-color: ${props => props.theme['base-color-blue-5']};
  }
`

const StyledInput = styled.input`
  flex: 1;
  padding: 8px 12px;
  border: none;
  font-size: 16px;
  color: ${props => props.theme['text-color']};
  background-color: transparent;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${props => props.theme['text-quaternary-color']};
    font-weight: 300;
  }
`

const SlotWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
  color: ${props => props.theme['text-quaternary-color']};
`

const Input: React.FC<InputProps> = ({ prefix, suffix, ...props }) => {
  return (
    <InputWrapper>
      {prefix && <SlotWrapper>{prefix}</SlotWrapper>}
      <StyledInput {...props} />
      {suffix && <SlotWrapper>{suffix}</SlotWrapper>}
    </InputWrapper>
  )
}

export default Input
