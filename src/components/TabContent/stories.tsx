import { Story, Meta } from '@storybook/react/types-6-0'
import TabContent, { TabContentProps } from '.'

export default {
  title: 'Tab Content',
  component: TabContent,
  parameters: {
    backgrounds: {
      default: 'space-dark'
    }
  }
} as Meta

export const Default: Story<TabContentProps> = (args) => (
  <TabContent {...args} />
)

Default.args = {
  title: 'MOON',
  content:
    'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.'
}
