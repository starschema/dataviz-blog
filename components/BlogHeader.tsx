'use client'
import breakpoints from "lib/tailwind.breakpoints";
import { useMediaQuery } from "usehooks-ts";

import MobileBlogHeader from "./MobileBlogHeader";
import DesktopBlogHeader from "./DesktopBlogHeader";


export default function BlogHeader() {
  // @ts-ignore - breakpoints is typed incorrectly
  const isMobile = useMediaQuery(`(max-width: ${breakpoints.md})`)

  return isMobile ? <MobileBlogHeader /> : <DesktopBlogHeader />
}
