import AuthorBio from 'components/AuthorBio'
import type { Author } from 'lib/sanity.queries'

interface Props {
  authors: Author[]
}
export default function AuthorBioBox(props: Props) {
  return (
    <div className="bg-blue-100 px-6 pt-6 pb-0 ">
      <div className="text-sm font-light text-neutral-400">
        <p>about the {props.authors.length > 1 ? 'authors' : 'author'}</p>
      </div>
      {props.authors.map((author, idx) => {
        return (
          <AuthorBio
            name={author.name}
            bio={author.bio}
            key={`${author.name}-${idx}`}
          />
        )
      })}
    </div>
  )
}
