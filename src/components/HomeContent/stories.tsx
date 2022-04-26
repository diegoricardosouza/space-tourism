import { Story, Meta } from '@storybook/react/types-6-0'

import HomeContent from '.'

export default {
  title: 'Conteúdo da Home',
  component: HomeContent,
  parameters: {
    backgrounds: {
      default: 'space-dark'
    }
  }
} as Meta

export const Default: Story = () => <HomeContent />
