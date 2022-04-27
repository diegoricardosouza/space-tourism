import { Story, Meta } from '@storybook/react/types-6-0'
import FooterTab, { FooterTabProps } from '.'

export default {
  title: 'Tab Footer',
  component: FooterTab,
  parameters: {
    backgrounds: {
      default: 'space-dark'
    }
  }
} as Meta

export const Default: Story<FooterTabProps> = (args) => <FooterTab {...args} />

Default.args = {
  distanceTitle: 'AVG. DISTANCE',
  distanceContent: '384,400 km',
  timeTitle: 'Est. travel time',
  timeContent: '3 days'
}
