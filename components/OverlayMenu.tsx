import PageNav from './PageNav'

interface Props {
    className?: string
    onNavigation?: () => void
}
export default function OverlayMenu(props: Props) {
    return <PageNav className='text-center py-32' onNavigation={props.onNavigation} />
}