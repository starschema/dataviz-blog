function embedUrlFromVideoId(videoId: string) {
  return `https://www.youtube.com/embed/${videoId}`
}

function validateEmbedUrl(url: string) {
  let parsedUrl = null

  try {
    parsedUrl = new URL(url)
  } catch (err) {
    throw new Error(`URL: ${url} could not be parsed`)
  }

  if (
    parsedUrl.hostname !== 'www.youtube.com' &&
    parsedUrl.hostname !== 'youtube.com' &&
    parsedUrl.hostname !== 'youtu.be'
  ) {
    throw new Error(
      `Invalid host in url: ${url}, expected a youtube link like https://www.youtube.com/watch?v=dQw4w9WgXcQ.`
    )
  }

  if (parsedUrl.pathname === '/watch') {
    if (!parsedUrl.search) throw new Error(`URL: ${url} does not have a query`)
    const videoId = parsedUrl.searchParams.get('v')
    if (!videoId) throw new Error(`URL: ${url} does not have a video id`)
    return embedUrlFromVideoId(videoId)
  }

  if (parsedUrl.pathname.startsWith('/embed')) {
    const videoId = parsedUrl.pathname.replace('/embed/', '')
    return embedUrlFromVideoId(videoId)
  }

  if (parsedUrl.hostname === 'youtu.be') {
    const videoId = parsedUrl.pathname.replace('/', '')
    return embedUrlFromVideoId(videoId)
  }
}

export default function YoutubeVideo({ src }: { src: string }) {
  const embedUrl = validateEmbedUrl(src)

  return (
    <iframe
      width="560"
      height="315"
      src={embedUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  )
}
