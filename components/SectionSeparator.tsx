interface Props {
  className?: string
}
export default function SectionSeparator(props: Props) {
  const innerClasses = 'border-accent-2'
  return <hr className={`${props.className ?? ''} ${innerClasses}`} />
}
