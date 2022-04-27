import { Story, Meta } from '@storybook/react/types-6-0'
import Moon, { MoonProps } from '.'

export default {
  title: 'Moon',
  component: Moon,
  parameters: {
    backgrounds: {
      default: 'space-dark'
    }
  }
} as Meta

export const Default: Story<MoonProps> = (args) => <Moon {...args} />

Default.args = {
  img: '/img/moons/moon.png',
  name: 'Moon'
}
