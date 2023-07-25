/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { codeInput } from '@sanity/code-input'
import { colorInput } from '@sanity/color-input'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

import {
  apiVersion,
  dataset,
  previewSecretId,
  projectId,
} from './lib/sanity.api'
import { previewDocumentNode } from './plugins/previewPane'
import { productionUrl } from './plugins/productionUrl'
import authorType from './schemas/author'
import breakType from './schemas/break'
import colorSwatchType from './schemas/colorSwatch'
import postType from './schemas/post'
import tableauType from './schemas/tableau'
import youtubeVideoType from './schemas/youtubeVideo'

const title = 'Studio for The Viz Collective'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      authorType,
      postType,
      tableauType,
      youtubeVideoType,
      colorSwatchType,
      breakType,
    ],
  },
  plugins: [
    deskTool({
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: [postType.name],
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    codeInput(),
    colorInput(),
  ],
})
