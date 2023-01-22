import { Post } from '@/lib/sanity.queries'

interface Props {
  authors: Post['authors'][]
}
export default function AuthorMeta(props) {
  const authorNames = props.authors.map((author) => author.name).join(', ')

  return (
    <p className="my-4 text-sm uppercase">
      <span className="text-neutral-400">Written by: </span>
      <span className="font-medium">{authorNames}</span>
    </p>
  )
}
