import { ComponentProps } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  CloseIcon,
  ToastContainerCustom,
  ToastContent,
  ToastDescription,
  ToastTitle
} from './style'

interface ShowToastProps {
  title?: string
  description?: string
}

export interface ToastProps
  extends ComponentProps<typeof ToastContainerCustom>,
    ShowToastProps {
  position:
    | 'top-right'
    | 'top-center'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-center'
    | 'bottom-left'
  autoClose?: number | false
}

export const Toast = ({
  position = 'bottom-right',
  autoClose = false,
  ...props
}: ToastProps) => {
  return (
    <ToastContainerCustom
      position={position}
      autoClose={autoClose}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      {...props}
      closeButton={<CloseToast />}
    />
  )
}

export const showToast = ({ title, description }: ShowToastProps) => {
  toast(
    <ToastContent>
      {!!title && <ToastTitle>{title}</ToastTitle>}
      {!!description && <ToastDescription>{description}</ToastDescription>}
    </ToastContent>,
  )
}

const CloseToast = () => {
  return <CloseIcon />
}
