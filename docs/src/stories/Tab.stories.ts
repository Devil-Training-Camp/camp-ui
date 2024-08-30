import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from 'camp-ui'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tabs: ['Account', 'Security', 'Notifications', 'Billing'],
  },
}
