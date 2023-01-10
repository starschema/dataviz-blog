import { format, parseISO } from 'date-fns'

export default function PostDate({ dateString }: { dateString: string }) {
  if (!dateString) return null

  const date = parseISO(dateString)
  return (
    <time className="text-neutral-500" dateTime={dateString}>
      {format(date, 'LLLL	d, yyyy')}
    </time>
  )
}
