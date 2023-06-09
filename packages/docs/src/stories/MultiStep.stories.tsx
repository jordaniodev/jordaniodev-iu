import { Box, MultiStep, MultiStepProps } from '@jordaniodev-iu/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    size: 4,
    currtentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as={'label'}
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currtentStep: 4,
  },
}
