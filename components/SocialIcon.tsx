import dynamic from 'next/dynamic'
import Link from 'next/link'

const TwitterIcon = dynamic(
  () => import('public/images/social-icons/twitter.svg'),
  {
    loading: () => null,
  }
)
const InstagramIcon = dynamic(
  () => import('public/images/social-icons/instagram.svg'),
  {
    loading: () => null,
  }
)
const MastodonIcon = dynamic(
  () => import('public/images/social-icons/mastodon.svg'),
  {
    loading: () => null,
  }
)

type SocialNetwork = 'twitter' | 'instagram' | 'mastodon'
interface Props {
  network: SocialNetwork
  url: string
}
export default function SocialIcon(props: Props) {
  const icon = {
    // @ts-ignore
    twitter: <TwitterIcon width={32} height={32} />,
    // @ts-ignore
    instagram: <InstagramIcon width={32} height={32} />,
    // @ts-ignore
    mastodon: <MastodonIcon width={32} height={32} />,
  }[props.network]

  const color = {
    twitter: 'text-blue-500',
    instagram: 'text-pink-600',
    mastodon: 'text-violet-700',
  }[props.network]

  return (
    <Link
      href={props.url}
      className={`h-8 w-8 transition-all hover:scale-110 ${color}`}
      aria-label={`Open the Starschema dataviz team's ${props.network}`}
    >
      {icon}
    </Link>
  )
}
