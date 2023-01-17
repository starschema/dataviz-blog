import BlogMeta from 'components/BlogMeta'
import { Settings } from 'lib/sanity.queries'

export interface IndexPageHeadProps {
  settings: Settings
}

export default function IndexPageHead({ settings }: IndexPageHeadProps) {
  return (
    <>
      {/* FIXME */}
      <title>Bestest Blog ever</title>
      <BlogMeta />
      <meta
        key="description"
        name="description"
        content="a blog by the dataviz team at Starschema"
      />
      <meta
        property="og:image"
        // Because OG images must have a absolute URL, we use the
        // `VERCEL_URL` environment variable to get the deployment’s URL.
        // More info:
        // https://vercel.com/docs/concepts/projects/environment-variables
        content={`${
          process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
        }/api/og?${new URLSearchParams({
          title: 'this is an image, it will be sorted out',
        })}`}
      />
    </>
  )
}
