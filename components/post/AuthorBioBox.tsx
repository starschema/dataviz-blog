import AuthorBio from '@/components/shared/AuthorBio'
import type { Author } from '@/lib/sanity.queries'

interface Props {
  authors: Author[]
}
export default function AuthorBioBox(props: Props) {
  return (
    <div className="mx-auto mt-12 mb-8 max-w-4xl bg-blue-50 pt-6 pb-0">
      <div className="px-8 text-sm font-light text-neutral-400">
        <p>about the {props.authors.length > 1 ? 'authors' : 'author'}</p>
      </div>
      <ul className="flex flex-col py-2">
        {props.authors.map((author, idx) => {
          return (
            <AuthorBio
              name={author.name}
              bio={author.bio}
              picture={author.picture}
              key={`${author.name}-${idx}`}
              socials={author.socials}
              isFixedOpen={true}
            />
          )
        })}
      </ul>
    </div>
  )
}
