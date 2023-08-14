import BodyImage from './BodyImage'
import Break from './Break'
import Code from './Code'
import ColorSwatch from './ColorSwatch'
import DangerousHTML from './DangerousHTML'
import Heading from './Heading'
import Iframe from './Iframe'
import PullQuote from './PullQuote'
import TableauBlock from './TableauBlock'
import Tabs from './Tabs'
import YoutubeVideoBlock from './YoutubeVideoBlock'

export const componentToBlockMappingWithoutTabs = {
  types: {
    code: Code,
    image: BodyImage,
    tableau: TableauBlock,
    youtubeVideo: YoutubeVideoBlock,
    colorSwatch: ColorSwatch,
    inlineHtml: DangerousHTML,
    blockHtml: DangerousHTML,
    break: Break,
    iframe: Iframe,
  },
  block: {
    h1: Heading,
    h2: Heading,
    h3: Heading,
    h4: Heading,
    h5: Heading,
    h6: Heading,
    pullquote: PullQuote,
  },
}

const componentToBlockMapping = {
  ...componentToBlockMappingWithoutTabs,
  types: {
    ...componentToBlockMappingWithoutTabs.types,
    tabsBlock: Tabs,
  },
}

export default componentToBlockMapping
