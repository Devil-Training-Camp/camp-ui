import type { Preview } from '@storybook/react'
import { ThemeProvider, dark, light } from 'camp-ui'
import React from 'react'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light,
        dark,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
    }),
  ],
}

export default preview
