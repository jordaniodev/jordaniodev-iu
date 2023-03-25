import { styled } from '../../styles'

import * as ToolTip from '@radix-ui/react-tooltip'
import { keyframes } from '@stitches/react'

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

export const ToolTipContent = styled(ToolTip.Content, {
  borderRadius: '$xs',
  padding: '$4 $6',
  fontSize: '$sm',
  lineHeight: '$extraShorter',
  color: '$gray100',
  backgroundColor: '$gray900',
  userSelect: 'none',
  willChange: 'transform, opacity',

  '&[data-state="delayed-open"][data-side="top"]': {
    animation: `${slideDownAndFade} 400ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="delayed-open"][data-side="right"]': {
    animation: `${slideLeftAndFade} 400ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="delayed-open"][data-side="bottom"]': {
    animation: `${slideUpAndFade} 400ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="delayed-open"][data-side="left"]': {
    animation: `${slideRightAndFade} 400ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
})
export const ToolTipArrow = styled(ToolTip.Arrow, {
  fill: '$gray900',
})
