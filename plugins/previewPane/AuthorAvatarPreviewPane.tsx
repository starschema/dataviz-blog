import { Card, Flex } from '@sanity/ui'

import AuthorBioBox from '@/components/post/AuthorBioBox'
import type { Author } from '@/lib/sanity.queries'

export default function AuthorAvatarPreviewPane(author: Author) {
  return (
    <Card padding={6}>
      <Flex justify="center">
        <AuthorBioBox authors={[author]} />
      </Flex>
    </Card>
  )
}
