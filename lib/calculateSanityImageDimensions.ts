export function calculateSanityImageDimensions(url: string) {
  // example url
  // https://cdn.sanity.io/images/zp7mbokg/production/G3i4emG6B8JnTmGoN0UjgAp8-300x450.jpg?rect=70,20,120,150&h=200&blur=10

  // get the image dimensions from the url
  const dimensions = url
    .split('?')[0]
    .split('-')[1]
    .split('.')[0]
    .split('x')
    .map((n) => parseInt(n))

  // geth crop dimensions from the query params
  const parsedUrl = new URL(url)
  const crop = parsedUrl.searchParams
    .get('rect')
    ?.split(',')
    .map((n) => parseInt(n))

  if (crop) {
    return {
      width: crop[2],
      height: crop[3],
    }
  }

  return {
    width: dimensions[0],
    height: dimensions[1],
  }
}
