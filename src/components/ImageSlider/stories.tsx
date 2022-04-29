import { Story, Meta } from '@storybook/react/types-6-0'
import ImageSlider, { ImageSliderProps } from '.'

export default {
  title: 'Image Slider',
  component: ImageSlider,
  parameters: {
    backgrounds: {
      default: 'space-dark'
    }
  }
} as Meta

export const Default: Story<ImageSliderProps> = (args) => (
  <ImageSlider {...args} />
)

Default.args = {
  img: '/img/moons/moon.png',
  name: 'Moon',
  width: 568,
  height: 712
}
