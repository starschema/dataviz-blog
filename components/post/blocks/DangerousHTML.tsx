import type { PortableTextTypeComponentProps } from '@portabletext/react'
import type { CodeInputValue } from '@sanity/code-input'

import type { DangerousHTML } from '@/lib/sanity.queries'

// TODO this needs to be defined in schemas
interface DangerousHTMLValue {
  _type?: 'inlineHtml' | 'blockHtml'
  html: CodeInputValue
}

export default function DangerousHTML(
  props: PortableTextTypeComponentProps<DangerousHTMLValue>
) {
  const { html, _type: type } = props.value

  if (type === 'blockHtml') {
    return <div dangerouslySetInnerHTML={{ __html: html.code }} />
  }

  if (type === 'inlineHtml') {
    return (
      <span
        className="inline-block"
        dangerouslySetInnerHTML={{ __html: html.code }}
      />
    )
  }

  return null
}
