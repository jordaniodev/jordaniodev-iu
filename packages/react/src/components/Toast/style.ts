import { Cross1Icon } from '@radix-ui/react-icons'
import { ToastContainer } from 'react-toastify'
import { styled } from '../../styles'

export const ToastContainerCustom = styled(ToastContainer, {
  '.Toastify__toast': {
    boxShadow: 'none',
    borderRadius: '$sm',
    border: '$radii$px solid $colors$gray600',
    padding: '$3 $4',
  },
  '.Toastify__toast-theme--dark': {
    backgroundColor: '$gray800',
  },
  '.Toastify__toast-body': {
    padding: '0',
    maxWidth: 'calc(100% - 2rem)',
  },
})

export const ToastTitle = styled('span', {
  color: '$white',
  fontWeight: '$bold',
  lineHeight: '$base',
  fontFamily: 'Roboto',
})

export const ToastContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
})

export const ToastDescription = styled('span', {
  color: '$gray200',
  fontSize: '$sm',
  lineHeight: '$base',
})

export const CloseIcon = styled(Cross1Icon, {
  fill: '$colors$gray200',
  padding: '$2',
})
