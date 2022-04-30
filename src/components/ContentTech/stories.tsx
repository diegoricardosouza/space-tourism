import { Story, Meta } from '@storybook/react/types-6-0'
import ContentTech, { ContentTechProps } from '.'

export default {
  title: 'Content Technology',
  component: ContentTech,
  parameters: {
    backgrounds: {
      default: 'space-dark'
    }
  }
} as Meta

export const Default: Story<ContentTechProps> = (args) => (
  <ContentTech {...args} />
)

Default.args = {
  title: 'LAUNCH VEHICLE',
  subtitle: 'THE TERMINOLOGY…',
  content:
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
}
