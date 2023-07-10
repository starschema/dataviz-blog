import { type SanityClient, createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from './sanity.api'
import {
  type Author,
  type IndexPosts,
  type Post,
  articlesQuery,
  authorsQuery,
  indexQuery,
  postAndMoreStoriesQuery,
  postBySlugQuery,
  postSlugsQuery,
} from './sanity.queries'

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
  })
  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts')
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    })
  }
  return client
}

export async function getIndexPosts(client: SanityClient): Promise<IndexPosts> {
  return await client.fetch(indexQuery)
}

export async function getArticlesPosts(client: SanityClient): Promise<Post[]> {
  return await client.fetch(articlesQuery)
}

export async function getAuthors(
  client: SanityClient
): Promise<Omit<Author, 'image'>[]> {
  return (await client.fetch(authorsQuery)) || []
}

export async function getAllPostsSlugs(
  client: SanityClient
): Promise<Pick<Post, 'slug'>[]> {
  const slugs = (await client.fetch<string[]>(postSlugsQuery)) || []
  return slugs.map((slug) => ({ slug }))
}

export async function getPostBySlug(
  client: SanityClient,
  slug: string
): Promise<Post> {
  return (await client.fetch(postBySlugQuery, { slug })) || ({} as any)
}

export async function getPostAndMoreStories(
  client: SanityClient,
  slug: string
): Promise<{ post: Post; morePosts: Post[] }> {
  return await client.fetch(postAndMoreStoriesQuery, { slug })
}
