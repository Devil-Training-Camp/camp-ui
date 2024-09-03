import type { Meta, StoryObj } from '@storybook/react'
import { InputDropdown } from 'camp-ui'

const meta = {
  title: 'Components/InputDropdown',
  component: InputDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputDropdown>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
]

export const Default: Story = {
  args: {
    options,
    placeholder: 'Select an option',
    // onChange: (value: string) => console.log('Selected value:', value),
  },
}
