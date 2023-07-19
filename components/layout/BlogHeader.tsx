import DesktopBlogHeader from '@/components/layout/DesktopBlogHeader'
import MobileBlogHeader from '@/components/layout/MobileBlogHeader'

export default function BlogHeader() {
  // uses media queries to render the correct header
  return <>
    <MobileBlogHeader />  
    <DesktopBlogHeader />
  </>
}
