import * as Tooltip from '@radix-ui/react-tooltip'
import { ReactElement } from 'react'
import { ToolTipArrow, ToolTipContent } from './style'

export interface ToolTipProps {
  children: ReactElement
  trigger: ReactElement
  side: 'top' | 'right' | 'bottom' | 'left'
}
export const ToolTip = ({
  children,
  trigger,
  side = 'bottom',
}: ToolTipProps) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild={true}>{trigger}</Tooltip.Trigger>
        <Tooltip.Portal>
          <ToolTipContent sideOffset={5} side={side}>
            {children}
            <ToolTipArrow />
          </ToolTipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

ToolTip.displayName = 'ToolTip'
