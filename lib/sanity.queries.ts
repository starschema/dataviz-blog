import { groq } from 'next-sanity'
import { BlockSchemaType, PortableTextBlock, TypedObject } from 'sanity'

const postPreviewFields = groq`
  _id,
  title,
  date,
  thumbnail,
  "slug": slug.current,
  "authors": authors[]->{name, picture, bio},
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
*[_type == "post"] | order(date desc, _updatedAt desc) [1...7] {
  ${postPreviewFields}
}`
export const indexQuery = groq`
{
'featuredPost': ${featuredPostQuery},
'latestPosts': ${latestPostsQuery},
}`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] [0] {
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
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
  bio
}
`
export interface IndexPosts {
  featuredPost: Post
  latestPosts: Post[]
}

export interface Author {
  name?: string
  picture?: any
  bio?: string
}

export interface Tableau {
  url?: string
  alt?: string
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
