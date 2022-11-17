import type { CracoConfig } from '@craco/types'

import purgeCSSPlugin from '@fullhuman/postcss-purgecss'

const config: CracoConfig = {
  style: {
    postcss: {
      plugins: [
        purgeCSSPlugin({
          content: [
            './src/**/*.html',
            './src/**/*.tsx',
            './src/**/*.ts',
            './public/**/*.html',
          ],
        }),
      ],
    },
  },

  plugins: [
    {
      plugin: require('craco-esbuild'),
      options: {
        // esbuild-jest hasn't been updated recently, so I'd rather not use it.
        skipEsbuildJest: true,
      },
    },
  ],
}

export default config
