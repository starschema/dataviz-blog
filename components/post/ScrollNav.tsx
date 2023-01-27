import { useEffect, useState } from 'react'

import { useIsMobile } from '@/lib/hooks'

interface Props {
  headings: Array<{
    id: string
    text: string
    level: string
  }>
}

export default function ScrollNavigation(props: Props) {
  const [activeHeading, setActiveHeading] = useState(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    const headingIds = props.headings.map((heading) => heading.id)
    const docHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const targetId = entry.target.id
          if (!headingIds.includes(targetId)) return
          setActiveHeading(targetId)
        })
      },
      { rootMargin: '0px 0px -50% 0px' }
    )

    docHeadings.forEach((heading) => {
      observer.observe(heading)
    })

    return () => {
      observer.disconnect()
    }
  }, [props.headings])

  if (isMobile) return null

  const navItems = []

  // loop through headings and create nav items
  props.headings?.forEach((heading) => {
    navItems.push(
      <li
        key={heading.id}
        className={`${heading.id === activeHeading ? 'font-medium' : ''}`}
      >
        <a href={`#${heading.id}`}>{heading.text}</a>
      </li>
    )
  })

  return (
    <nav className="fixed top-64 right-10 inline-block ">
      <ol>{navItems}</ol>
    </nav>
  )
}
