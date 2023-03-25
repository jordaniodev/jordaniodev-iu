import { Button, showToast, Toast, ToastProps } from '@jordaniodev-iu/react'
import { Meta, StoryObj } from '@storybook/react'

const argsComponent: ToastProps = {
  position: 'bottom-right',
  autoClose: 500,
  title: 'Título',
  description: 'Description',
}

export default {
  title: 'Alerts/Toast',
  component: Toast,
  args: argsComponent,
  argTypes: {
    position: {
      options: [
        'top-right',
        'top-center',
        'top-left',
        'bottom-right',
        'bottom-center',
        'bottom-left',
      ],
      control: {
        type: 'select',
      },
      defaultValue: 'bottom-right',
    },
    title: {
      control: {
        type: 'text',
      },
      defaultValue: 'Título Alert',
    },
    description: {
      control: {
        type: 'text',
      },
      defaultValue: 'Título Alert',
    },
  },
  decorators: [
    (Story, { args }) => {
      return (
        <>
          <Button
            onClick={() => {
              showToast({
                title: args.title,
                description: args.description,
              })
            }}
          >
            Abrir Toast
          </Button>
          {Story()}
        </>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
