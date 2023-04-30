import { DOMAIN_NAME, TWITTER_USER } from '@/lib/constants'

interface Props {
  title: string
  description: string
  image: string
}

const defaultImage = `https://${DOMAIN_NAME}/images/index-og.png`

export default function SocialMetaTags(props: Props) {
  const { title, description, image = defaultImage } = props
  return (
    <>
      <meta key="description" name="description" content={`${description}`} />

      <meta property="og:title" content={`${title}`} />
      <meta property="og:description" content={`${description}`} />
      <meta property="og:image" content={`${image}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title}`} />
      <meta name="twitter:description" content={`${description}`} />
      <meta name="twitter:image" content={`${image}`} />
      <meta name="twitter:site" content={`${TWITTER_USER}`} />
    </>
  )
}
