/* eslint-disable @next/next/no-html-link-for-pages */
import Container from '@/components/layout/BlogContainer'

export default function Alert({
  draftMode,
  loading,
}: {
  draftMode?: boolean
  loading?: boolean
}) {
  if (!draftMode) return null

  return (
    <div
      className={`${
        loading ? 'animate-pulse' : ''
      } border-accent-7 bg-accent-7 border-b`}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {'Previewing draft content. '}
          <a
            href="/api/disable-draft"
            className="hover:text-cyan underline transition-colors duration-200"
          >
            Disable draft mode
          </a>
        </div>
      </Container>
    </div>
  )
}
