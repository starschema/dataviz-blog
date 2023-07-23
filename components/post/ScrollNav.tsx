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
    const isActive = heading.id === activeHeading
    return (
      <li
        key={heading.id}
        className={`${
          isActive
            ? 'border-l-[3px] border-black font-medium -tracking-[0.0125em]'
            : 'ml-[1px] border-l-[1px] border-gray-300'
        } whitespace-pre-wrap py-2 leading-snug transition-colors duration-300 ease-in-out`}
        style={{ paddingLeft: `${4 + indent * 8 - (isActive ? 1 : 0)}px` }}
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
    <div className="ml-12 hidden h-full pb-12 lg:block">
      <nav className="sticky left-0 top-12 bottom-0 max-w-xs">
        <ol>{navItems}</ol>
      </nav>
    </div>
  )
}
