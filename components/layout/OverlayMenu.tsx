import PageNav from '@/components/layout/PageNav'

interface Props {
  isClosed: boolean
  style?: React.CSSProperties
  onNavigation?: () => void
}
export default function OverlayMenu(props: Props) {
  return props.isClosed ? null : (
    <div
      className="min-w-full overflow-hidden transition-[height]"
      style={props.style}
    >
      <PageNav
        className="py-32 text-center"
        onNavigation={props.onNavigation}
      />
    </div>
  )
}
