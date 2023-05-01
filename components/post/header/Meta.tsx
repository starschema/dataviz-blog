import type { Post } from 'lib/sanity.queries'

import Author from '@/components/post/header/Author'
import Date from '@/components/shared/Date'

type Props = Pick<Post, 'date' | 'authors'>
export default function HeaderMeta(props: Props) {
  const { date, authors } = props
  return (
    <div className="md:flex md:gap-10" style={{ gridArea: 'meta' }}>
      <div className="max-w-2xl text-sm">
        <Author authors={authors} />
      </div>
      <Date dateString={date} className="mt-4 mb-6 text-sm" />
    </div>
  )
}
