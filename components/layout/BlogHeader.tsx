import { useEffect, useState } from 'react'
import { useMediaQuery, useSsr } from 'usehooks-ts'

import DesktopBlogHeader from '@/components/layout/DesktopBlogHeader'
import MobileBlogHeader from '@/components/layout/MobileBlogHeader'
import breakpoints from '@/lib/tailwind.breakpoints'

export default function BlogHeader() {
  // @ts-ignore - breakpoints is typed incorrectly
  const matchesMobile = useMediaQuery(`(max-width: ${breakpoints.md})`)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    setIsMobile(matchesMobile)
  }, [matchesMobile])

  return isMobile ? <MobileBlogHeader /> : <DesktopBlogHeader />
}
