import { PortableTextTypeComponentProps } from '@portabletext/react'

import Tableau from '@/components/Tableau'

type TableauValue = {
  _type?: 'tableau'
  url: string
  alt: string
}
type Props = PortableTextTypeComponentProps<TableauValue>
export default function TableauBlock(props: Props) {
  const { url, alt } = props.value
  return <Tableau url={url} alt={alt} />
}
