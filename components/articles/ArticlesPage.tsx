import ArticlesPageHead from '@/components/articles/ArticlesPageHead'
import Container from '@/components/layout/BlogContainer'
import PostPreview from '@/components/shared/PostPreview'
import { Post } from '@/lib/sanity.queries'

interface Props {
  articles: Post[]
}

export default function ArticlesPage(props: Props) {
  const { articles } = props

  return (
    <>
      <ArticlesPageHead />
      <Container>
        <div className="grid grid-cols-1 gap-10 py-6 md:grid-cols-2 ">
          {articles.map((a) => (
            <PostPreview post={a} key={a._id} withExcerpt />
          ))}
        </div>
      </Container>
    </>
  )
}
