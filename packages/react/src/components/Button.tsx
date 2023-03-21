import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',
  padding: '0 $4',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  svg: {
    widows: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$ignite500',

        '&:not(:disable):hover': {
          background: '$ignite300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      secondary: {
        color: '$ignite300',
        border: '2px solid $ignite500',

        '&:not(:disable):hover': {
          background: '$ignite500',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disable):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
          borderColor: '$gray200',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },
      md: {
        padding: '0 $4',
        height: 46,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {}

Button.displayName = 'Button'
