import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from '../Input'
import { Popover } from '../Popover'

interface Option {
  value: string
  label: string
}

interface InputDropdownProps {
  options: Option[]
  placeholder?: string
  onChange?: (value: string) => void
}

const DropdownList = styled.ul`
  list-style-type: none;
  padding: 4px;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
  background-color: ${props => props.theme['background-color']};
  border-radius: ${props => props.theme['base-border-radius-md']};
`

const DropdownItem = styled.li<{ $isSelected: boolean }>`
  padding: 8px 14px;
  cursor: pointer;
  border-radius: ${props => props.theme['base-border-radius-sm']};
  color: ${props => props.$isSelected ? props.theme['text-color'] : props.theme['text-secondary-color']};
  background-color: ${props => props.$isSelected ? props.theme['background-color-active'] : 'transparent'};
  
  /* CSS reset for li element */
  margin: 0;
  list-style-type: none;

  &:hover {
    background-color: ${props => props.$isSelected ? props.theme['background-color-active'] : props.theme['background-color-hover']};
  }
`

const InputDropdown: React.FC<InputDropdownProps> = ({ options, placeholder, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)

  const handleInputClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option)
    onChange?.(option.value)
    setIsOpen(false)
  }

  return (
    <Popover
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      content={(
        <DropdownList>
          {options.map(option => (
            <DropdownItem
              key={option.value}
              onClick={() => handleOptionSelect(option)}
              $isSelected={selectedOption?.value === option.value}
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    >
      <Input
        value={selectedOption ? selectedOption.label : ''}
        placeholder={placeholder}
        onClick={handleInputClick}
        readOnly
      />
    </Popover>
  )
}

export default InputDropdown
