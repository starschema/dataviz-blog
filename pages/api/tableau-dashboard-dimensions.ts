import type { NextApiRequest, NextApiResponse } from 'next'

import { calculatePngDimensions } from '@/lib/calculatePngDimensions'

export default async function tableauDashboardDimensions(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query

  const dimensions = await calculatePngDimensions(url as string)

  res.status(200).json(dimensions)
}
