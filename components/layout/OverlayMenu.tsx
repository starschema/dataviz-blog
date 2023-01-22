import PageNav from '@/components/layout/PageNav'

interface Props {
  className?: string
  onNavigation?: () => void
}
export default function OverlayMenu(props: Props) {
  return (
    <PageNav className="py-32 text-center" onNavigation={props.onNavigation} />
  )
}
