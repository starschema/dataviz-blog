import { FunctionComponent } from 'react'
import { BlockStyleProps } from 'sanity'

export default (function PullQuote(props) {
  return (
    <p className="font-regular my-16 text-4xl leading-relaxed">
      {props.children}
    </p>
  )
} satisfies FunctionComponent<BlockStyleProps>)
