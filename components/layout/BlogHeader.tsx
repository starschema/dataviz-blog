import DesktopBlogHeader from '@/components/layout/DesktopBlogHeader'
import MobileBlogHeader from '@/components/layout/MobileBlogHeader'
import { useIsMobile } from '@/lib/hooks'

export default function BlogHeader() {
  const isMobile = useIsMobile()
  return isMobile ? <MobileBlogHeader /> : <DesktopBlogHeader />
}
