import Image from 'next/image'

interface Props {
  text: string
  image: string
  textFirst: boolean
}

export default function AboutListItem(props: Props) {
  const { text, image, textFirst } = props
  const flexDirection = textFirst ? 'flex-row-reverse' : 'flex-row'
  return (
    <li className={`flex ${flexDirection} items-center justify-between max-w-xs w-full whitespace-pre-line py-10 lg:flex-col lg:text-center`}>
      <div className="flex w-40 justify-center">
        <Image src={image} alt="" aria-hidden />
      </div>
      <span className="flex-1 font-medium lg:py-8">{text}</span>
    </li>
  )
}
