import resolveConfig from 'tailwindcss/resolveConfig'

import tailwindConfig from 'tailwind.config'

const fullConfig = resolveConfig(tailwindConfig)

const colors = fullConfig.theme.colors
const vcColorKeys = Object.keys(colors).filter((c) => c.startsWith('vc-'))

const breakpoints = fullConfig.theme.screens

export { breakpoints, colors, vcColorKeys }
export default fullConfig
