import Image from 'next/image'

interface Props {
  text: string
  image: string
  textFirst: boolean
}

export default function AboutListItem(props: Props) {
  const { text, image, textFirst } = props
  const textElement = <span className="flex-1">{text}</span>
  return (
    <li className="flex items-center whitespace-pre-line border-b border-gray-200 py-10">
      {textFirst && textElement}
      <div className="flex w-40 justify-center">
        <Image src={image} alt="" aria-hidden />
      </div>
      {!textFirst && textElement}
    </li>
  )
}
