import type { Meta, StoryObj } from '@storybook/react'
import { Input } from 'camp-ui'
import { Lock01Icon as LockIcon, Mail01Icon as MailIcon, SearchMDIcon as SearchIcon } from 'untitledui-js-base'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    prefix: { control: 'boolean' },
    suffix: { control: 'boolean' },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter your email',
  },
}

export const WithPrefix: Story = {
  args: {
    placeholder: 'Search...',
    prefix: <SearchIcon size="18" />,
  },
}

export const WithSuffix: Story = {
  args: {
    placeholder: 'Enter your email',
    suffix: <MailIcon size="18" />,
  },
}

export const WithPrefixAndSuffix: Story = {
  args: {
    placeholder: 'Enter password',
    prefix: <LockIcon size="18" />,
    suffix: <MailIcon size="18" />,
  },
}
