import Image from 'next/image'
import HamburgerIconImage from 'public/images/hamburger-icon.svg'
import XIconImage from 'public/images/x-icon.svg'
import { MouseEventHandler } from 'react'

interface Props {
  isClosed: boolean
  className?: string
  onClick: MouseEventHandler<HTMLButtonElement>
}
export default function HamburgerIcon(props: Props) {
  const { isClosed, className } = props
  return (
    <button className={className ?? ''} onClick={props.onClick}>
      {isClosed ? (
        <HamburgerIconImage aria-hidden width={24} height={24} />
      ) : (
        <XIconImage aria-hidden width={24} height={24} />
      )}
    </button>
  )
}
