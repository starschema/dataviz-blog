import type { Post } from 'lib/sanity.queries'

import Date from './Date'

type Props = Pick<Post, 'date' | 'authors'>
export default function HeaderMeta(props: Props) {
    const { date, authors } = props
    const authorNames = authors?.map((author) => author.name).join(', ')
    return <div className='col-span-5 col-start-4 row-start-3'>
        <div className="max-w-2xl text-sm">
            <p className="mb-4 uppercase">
                <span className="text-neutral-400">Written by: </span>
                <span className="font-medium">{authorNames}</span>
            </p>
        </div>
        <div className="mb-6 text-sm">
            <Date dateString={date} />
        </div>
    </div>
}