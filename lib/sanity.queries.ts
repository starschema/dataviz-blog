import { ColorValue } from '@sanity/color-input'
import { groq } from 'next-sanity'
import { PortableTextBlock } from 'sanity'

const postPreviewFields = groq`
  _id,
  title,
  date,
  thumbnail,
  "slug": slug.current,
  "authors": authors[]->{name, picture, bio, socials},
`

const postFields = groq`
  ${postPreviewFields}
  content,
  layout,
  excerpt,
`

export const featuredPostQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) [0] {
  excerpt,
  ${postPreviewFields}
}`
export const latestPostsQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) [1...4] {
  ${postPreviewFields}
}`
export const indexQuery = groq`
{
'featuredPost': ${featuredPostQuery},
'latestPosts': ${latestPostsQuery},
}`

export const articlesQuery = groq`
  *[_type == "post"] | order(date desc, _updatedAt desc) {
    excerpt,
    ${postPreviewFields}
  }
`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] [0] {
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...3] {
    ${postPreviewFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

export const authorsQuery = groq`
*[_type == "author" && isGuest != true] | order(name asc) {
  name,
  bio,
  picture,
  socials
}
`
export interface IndexPosts {
  featuredPost: Post
  latestPosts: Post[]
}

export interface Social {
  name: string
  url: string
}

export interface Author {
  name?: string
  picture?: any
  bio?: string
  socials?: Social[]
}

export interface Tableau {
  url?: string
  alt?: string
  width: number
  height: number
  borderColor?: string
}

export interface YoutubeVideo {
  url?: string
}

export interface ColorSwatch {
  name?: string
  color: ColorValue
}

export interface Tabs {
  tabs?: {
    title?: string
    content?: PortableTextBlock[]
  }[]
}

export interface Break {
  type: string
}

export interface DangerousHTML {
  html?: string
}

export interface Iframe {
  src?: string
  aspectRatio?: number
}

export interface Post {
  _id: string
  title?: string
  thumbnail?: {
    asset?: {
      url?: string
      _ref?: string
    }
    alt?: string
  }
  date?: string
  excerpt?: string
  authors?: Author[]
  slug?: string
  content?: PortableTextBlock[]
  layout?: {
    type: string
    headerTableau?: Tableau
  }
}
