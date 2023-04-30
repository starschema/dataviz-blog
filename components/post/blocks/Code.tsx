import 'prismjs/themes/prism-solarizedlight.css'

import { PortableTextTypeComponentProps } from '@portabletext/react'
import type { CodeInputValue } from '@sanity/code-input'
import React from 'react'
import Refractor from 'react-refractor'
import js from 'refractor/lang/javascript'
import python from 'refractor/lang/python'

Refractor.registerLanguage(js)
Refractor.registerLanguage(python)

type Props = PortableTextTypeComponentProps<CodeInputValue>
export default function Code(props: Props) {
  return (
    <Refractor
      // In this example, `props` is the value of a `code` field
      language={props.value.language}
      value={props.value.code}
      markers={props.value.highlightedLines}
    />
  )
}
