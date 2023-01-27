import { Post } from '@/lib/sanity.queries'

interface Props {
  authors: Post['authors'][]
  className?: string
}
export default function AuthorMeta(props) {
  const authorNames = props.authors.map((author) => author.name).join(', ')

  return (
    <p className={`my-4 uppercase ${props.className}`}>
      <span className="text-neutral-400">Written by: </span>
      <span className="font-medium">{authorNames}</span>
    </p>
  )
}
