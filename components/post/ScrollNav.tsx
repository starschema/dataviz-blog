import { useEffect, useMemo, useState } from 'react'
import { PortableTextBlock } from 'sanity'
import slugify from 'slugify'

interface Props {
  content?: PortableTextBlock[]
}

export default function ScrollNavigation({ content }: Props) {
  const [activeHeading, setActiveHeading] = useState(null)

  const headings = useMemo(() => {
    return content
      ?.filter((block) =>
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(block.style as string)
      )
      .map((block) => ({
        id: slugify(block.children[0].text),
        text: block.children[0].text,
        level: block.style.toString(),
      }))
  }, [content])

  useEffect(() => {
    const headingIds = headings.map((heading) => heading.id)
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
      { rootMargin: '0px 0px -75% 0px' }
    )

    docHeadings.forEach((heading) => {
      observer.observe(heading)
    })

    return () => {
      observer.disconnect()
    }
  }, [headings])

  if (isMobile) return null
  if (headings.length <= 1) return null

  const navItems = headings.map((heading) => {
    const indent = parseInt(heading.level.slice(1)) - 1
    return (
      <li
        key={heading.id}
        className={`${
          heading.id === activeHeading ? 'font-medium' : ''
        } whitespace-pre-wrap leading-snug`}
        style={{ marginLeft: `${indent * 8}px` }}
      >
        <a
          className="block overflow-hidden text-ellipsis"
          href={`#${heading.id}`}
        >
          {heading.text}
        </a>
      </li>
    )
  })

  return (
    <div className="hidden h-full md:block">
      <nav className="sticky top-12 bottom-12 max-w-xs ">
        <ol className="space-y-4">{navItems}</ol>
      </nav>
    </div>
  )
}
