export const config: PageConfig = { runtime: 'experimental-edge' }

import { ImageResponse } from '@vercel/og'
import type { NextRequest, NextResponse } from 'next/server'
import type { PageConfig } from 'next/types'
import { createClient } from 'next-sanity'

import { height, OpenGraphImage, width } from '@/components/OpenGraphImage'
import { apiVersion, dataset, projectId } from '@/lib/sanity.api'

export default async function og(req: NextRequest, res: NextResponse) {
  const font = fetch(new URL('public/Inter-Bold.woff', import.meta.url)).then(
    (res) => res.arrayBuffer()
  )
  const { searchParams } = new URL(req.url)

  let title = searchParams.get('title')

  return new ImageResponse(
    (
      // FIXME: fix the title here
      <OpenGraphImage title={title || 'ogImageTitle'} />
    ),
    {
      width,
      height,
      fonts: [
        {
          name: 'Inter',
          data: await font,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  )
}
