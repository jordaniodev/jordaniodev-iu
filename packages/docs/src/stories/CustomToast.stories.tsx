import { Toast, ToastProps } from '@jordanio-ignite-iu/react'
import { ToastProvider, useToast } from '@radix-ui/react-toast'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Alerts/CustomToast',
  component: Toast,
  args: {
    description: 'Lorem Ipsum dolor sit atmet',
    title: 'Título',
  },
  decorators: [
    (Story) => {
      const { show } = useToast()
      const handleClick = () => {
        show({
          message: 'Mensagem de exemplo',
          sideOffset: 20,
          topOffset: 20,
        })
      }
      return (
        <ToastProvider>
          <div>
            <button onClick={handleClick}>Mostrar Toast</button>
            <Story />
          </div>
        </ToastProvider>
      )
    },
  ],
  argTypes: {},
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
