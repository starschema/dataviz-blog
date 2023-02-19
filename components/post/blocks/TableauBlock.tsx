import type { PortableTextTypeComponentProps } from '@portabletext/react'

import Tableau from '@/components/shared/Tableau'
import type { Tableau as TableauType } from '@/lib/sanity.queries'

interface TableauValue extends TableauType {
  _type?: 'tableau'
}

type Props = PortableTextTypeComponentProps<TableauValue>
export default function TableauBlock(props: Props) {
  return <Tableau {...props.value} />
}
