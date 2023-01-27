import { useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'

import breakpoints from '@/lib/tailwind.breakpoints'

export function useIsMobile() {
  // @ts-ignore - breakpoints is typed incorrectly
  const matchesMobile = useMediaQuery(`(max-width: ${breakpoints.md})`)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    setIsMobile(matchesMobile)
  }, [matchesMobile])

  return isMobile
}
