// copied and adapted from https://github.com/image-size/image-size/blob/main/lib/types/png.ts
// using this answer https://stackoverflow.com/questions/73838197/what-is-arraybuffer-equivalent-to-readuint32be-nodes-method
const pngFriedChunkName = 'CgBI'

export async function calculatePngDimensions(url: string) {
  const res = await fetch(url)
  const buffer = await res.arrayBuffer()

  const friedCheckChunk = buffer.slice(12, 16).toString()
  const isFried = friedCheckChunk === pngFriedChunkName

  const dataView = new DataView(buffer)

  if (isFried) {
    return {
      height: dataView.getUint32(36, false),
      width: dataView.getUint32(32, false),
    }
  }
  return {
    height: dataView.getUint32(20, false),
    width: dataView.getUint32(16, false),
  }
}
