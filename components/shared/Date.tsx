import { format, parseISO } from 'date-fns'

interface Props {
  dateString: string
  className?: string
}
export default function PostDate(props: Props) {
  const { dateString, className } = props
  if (!dateString) return null

  const date = parseISO(dateString)
  return (
    <p className={`my-2 text-neutral-500 ${className ?? ''}`}>
      <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
    </p>
  )
}
