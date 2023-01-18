import { format, parseISO } from 'date-fns'

export default function PostDate({ dateString }: { dateString: string }) {
  if (!dateString) return null

  const date = parseISO(dateString)
  return (
    <p className="my-4 text-neutral-500">
      <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
    </p>
  )
}
