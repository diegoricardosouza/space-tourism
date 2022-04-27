import { Story, Meta } from '@storybook/react/types-6-0'
import Breadcrumb, { BreadcrumbProps } from '.'

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
  parameters: {
    backgrounds: {
      default: 'space-dark'
    }
  }
} as Meta

export const Default: Story<BreadcrumbProps> = (args) => (
  <Breadcrumb {...args} />
)

Default.args = {
  number: '01',
  title: 'Pick your destination'
}
