import type { PortableTextTypeComponentProps } from '@portabletext/react'

import SectionSeparator from '@/components/shared/SectionSeparator'
import type { Break } from '@/lib/sanity.queries'

interface BreakValue extends Break {
  _type?: 'break'
}

export default function Break(
  props: PortableTextTypeComponentProps<BreakValue>
) {
  const { type } = props.value
  switch (type) {
    case 'horizontal':
      return <SectionSeparator className="mb-8" />
    default:
      return null
  }
}
