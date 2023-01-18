import Image from 'next/image'
import { ReactNode } from 'react'

interface Props {
  text: string
  textFirst: boolean
  children: ReactNode
}

export default function AboutListItem(props: Props) {
  const { text, children, textFirst } = props
  const flexDirection = textFirst ? 'flex-row-reverse' : 'flex-row'
  return (
    <li
      className={`flex ${flexDirection} w-full max-w-xs items-center justify-between whitespace-pre-line py-10 lg:flex-col lg:text-center`}
    >
      <div className="flex w-40 justify-center">{children}</div>
      <span className="flex-1 font-medium lg:py-8">{text}</span>
    </li>
  )
}
