import { Button, Text, ToolTip, ToolTipProps } from '@jordanio-ignite-iu/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Alerts/ToolTip',
  component: ToolTip,
  args: {
    children: <Text>Lorem Ipsum dolor sit atmet</Text>,
    trigger: <Button>Teste</Button>,
  },
  argTypes: {
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'select',
      },
      defaultValue: 'top',
    },
  },
} as Meta<ToolTipProps>

export const Primary: StoryObj<ToolTipProps> = {}
