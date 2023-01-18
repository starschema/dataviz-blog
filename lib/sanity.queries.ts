import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  thumbnail,
  "slug": slug.current,
  "authors": authors[]->{name, picture, bio},
  "layoutType": layoutType
`

export const settingsQuery = groq`*[_type == "settings"][0]`

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
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

export interface Author {
  name?: string
  picture?: any
  bio?: string
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
  content?: any
  layoutType?: {
    layout: string
    tableauUrl: string
  }
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}
