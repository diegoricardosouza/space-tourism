import { Story, Meta } from '@storybook/react/types-6-0'
import ContentSlider, { ContentSliderProps } from '.'

export default {
  title: 'Content Slider',
  component: ContentSlider,
  parameters: {
    backgrounds: {
      default: 'space-dark'
    }
  }
} as Meta

export const Default: Story<ContentSliderProps> = (args) => (
  <ContentSlider {...args} />
)

Default.args = {
  title: 'Douglas Hurley',
  subtitle: 'Commander',
  content:
    'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
}
