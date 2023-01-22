import breakpoints from 'lib/tailwind.breakpoints'
import { useMediaQuery } from 'usehooks-ts'

import DesktopBlogHeader from '@/components/layout/DesktopBlogHeader'
import MobileBlogHeader from '@/components/layout/MobileBlogHeader'

export default function BlogHeader() {
  // @ts-ignore - breakpoints is typed incorrectly
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.md})`)

  return isMobile !== false ? <MobileBlogHeader /> : <DesktopBlogHeader />
}
