import { Story, Meta } from '@storybook/react/types-6-0'

import Menu from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    backgrounds: {
      default: 'space-dark'
    }
  }
} as Meta

export const Default: Story = () => <Menu />

export const Mobile: Story = () => <Menu />
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
