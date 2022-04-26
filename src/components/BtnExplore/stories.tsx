import { Story, Meta } from '@storybook/react/types-6-0'

import BtnExplore from '.'

export default {
  title: 'Botão Explore',
  component: BtnExplore,
  parameters: {
    backgrounds: {
      default: 'space-dark'
    }
  }
} as Meta

export const Default: Story = () => (
  <div style={{ width: '50rem', margin: '8rem auto 0 auto', height: '50rem' }}>
    <BtnExplore />
  </div>
)
