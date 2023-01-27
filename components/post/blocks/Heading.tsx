import {
  PortableTextTypeComponentProps,
  toPlainText,
} from '@portabletext/react'
import slugify from 'slugify'

interface Props {
  children?: React.ReactNode
  value: any
}

export default function Heading(props: Props) {
  const { value, children } = props
  const Tag = value.style
  const id = slugify(toPlainText(value))

  return <Tag id={id}>{children}</Tag>
}
