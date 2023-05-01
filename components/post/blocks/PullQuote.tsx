import type {
  PortableTextBlockComponent,
  PortableTextTypeComponentProps,
} from '@portabletext/react'

interface PullquoteValue {
  _type?: 'pullquote'
  text: string
}

type Props = PortableTextTypeComponentProps<string>

export default (function PullQuote(props) {
  console.log(props)
  return (
    <p className="font-regular my-16 text-4xl leading-relaxed">
      {props.children}
    </p>
  )
} satisfies PortableTextBlockComponent)
