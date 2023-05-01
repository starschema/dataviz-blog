import { ReactNode } from 'react'

interface Props {
  title: string
  textFirst: boolean
  icon: ReactNode
  children: ReactNode
}

export default function AboutListItem(props: Props) {
  const { title, children, icon, textFirst } = props
  const flexDirection = textFirst ? 'flex-row-reverse' : 'flex-row'
  return (
    <li
      className={`flex ${flexDirection} w-full items-center justify-between whitespace-pre-line lg:max-w-xs lg:flex-col lg:text-center`}
    >
      <div className="flex h-24 w-40 items-center justify-center">{icon}</div>
      <div className="flex-1">
        <h3 className="my-2 text-2xl font-medium lg:min-h-[4rem] xl:min-h-0">
          {title}
        </h3>
        <p className="hidden text-xl font-light sm:block">{children}</p>
      </div>
    </li>
  )
}
