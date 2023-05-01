import Tableau from '@/components/shared/Tableau'
import { Tableau as TableauType } from '@/lib/sanity.queries'

interface Props extends TableauType {
  className?: string
}

export default function TableauHeader(props: Props) {
  return (
    <div className={props.className}>
      <Tableau {...props} />
    </div>
  )
}
