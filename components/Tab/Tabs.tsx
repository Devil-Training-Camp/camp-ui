import React, { useState } from 'react'
import styled from 'styled-components'

interface TabProps {
  label: string
  isActive: boolean
  onClick: () => void
}

const TabButton = styled.button<{ $isActive: boolean }>`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.$isActive ? props.theme['text-color'] : props.theme['text-quaternary-color']};
  background-color: ${props => props.$isActive ? props.theme['background-color-active'] : 'transparent'};
  border: none;
  cursor: pointer;
  transition: color 0.3s, background-color 0.3s;
  border-radius: 4px;

  &:hover {
    color: ${props => props.$isActive ? props.theme['text-color'] : props.theme['text-quaternary-color-hover']};
    background-color: ${props => props.$isActive ? props.theme['background-color-active'] : props.theme['background-color-hover']};
  }
`

export const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => (
  <TabButton $isActive={isActive} onClick={onClick}>
    {label}
  </TabButton>
)

const TabContainer = styled.div`
  display: flex;
`

interface TabsProps {
  tabs: string[]
  onTabChange?: (tab: string) => void
}

const Tabs: React.FC<TabsProps> = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(tabs[0])

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
    if (onTabChange) {
      onTabChange(tab)
    }
  }

  return (
    <TabContainer>
      {tabs.map(tab => (
        <TabButton
          key={tab}
          $isActive={tab === activeTab}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </TabButton>
      ))}
    </TabContainer>
  )
}

export default Tabs
