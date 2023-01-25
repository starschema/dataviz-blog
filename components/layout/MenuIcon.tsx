import { MouseEventHandler } from 'react'

import HamburgerIconImage from '@/public/images/hamburger-icon.svg'
import XIconImage from '@/public/images/x-icon.svg'

interface Props {
  isClosed: boolean
  className?: string
  onClick: MouseEventHandler<HTMLButtonElement>
}
export default function HamburgerIcon(props: Props) {
  const { isClosed, className } = props
  return (
    <button
      className={className ?? ''}
      onClick={props.onClick}
      aria-label={
        isClosed
          ? 'Open Navigaton Menu Overlay'
          : 'Close Navigation Menu Overlay'
      }
    >
      {isClosed ? (
        <HamburgerIconImage aria-hidden />
      ) : (
        <XIconImage aria-hidden />
      )}
    </button>
  )
}
