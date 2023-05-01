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

const LinkedInIcon = dynamic(
  () => import('public/images/social-icons/linkedin.svg'),
  {
    loading: () => null,
  }
)

const PinterestIcon = dynamic(
  () => import('public/images/social-icons/pinterest.svg'),
  {
    loading: () => null,
  }
)

const GitHubIcon = dynamic(
  () => import('public/images/social-icons/github.svg'),
  {
    loading: () => null,
  }
)

type SocialNetwork =
  | 'twitter'
  | 'instagram'
  | 'mastodon'
  | 'linkedin'
  | 'pinterest'
  | 'github'
interface Props {
  network: SocialNetwork
  url: string
}
export default function SocialIcon(props: Props) {
  const width = 24
  const height = 24
  const [Icon, color] = {
    twitter: [TwitterIcon, 'text-blue-500'],
    instagram: [InstagramIcon, 'text-pink-600'],
    mastodon: [MastodonIcon, 'text-violet-700'],
    linkedin: [LinkedInIcon, 'text-blue-600'],
    pinterest: [PinterestIcon, 'text-red-500'],
    github: [GitHubIcon, 'text-gray-700'],
  }[props.network]

  return (
    <Link
      href={props.url}
      className={`transition-all hover:scale-110 ${color}`}
      aria-label={`Open the Starschema dataviz team's ${props.network}`}
      target="_blank"
    >
      {/* @ts-ignore */}
      <Icon width={width} height={height} />
    </Link>
  )
}
