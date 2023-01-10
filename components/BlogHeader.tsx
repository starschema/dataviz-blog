'use client'
import breakpoints from "lib/tailwind.breakpoints";
import { useMediaQuery } from "usehooks-ts";

import DesktopBlogHeader from "./DesktopBlogHeader";
import MobileBlogHeader from "./MobileBlogHeader";


export default function BlogHeader() {
  // @ts-ignore - breakpoints is typed incorrectly
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.md})`)

  return isMobile ? <MobileBlogHeader /> : <DesktopBlogHeader />
}
