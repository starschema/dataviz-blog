import resolveConfig from 'tailwindcss/resolveConfig'

import tailwindConfig from '../tailwind.config'

const fullConfig = resolveConfig(tailwindConfig)
const breakpoints = fullConfig.theme.screens

export default breakpoints
