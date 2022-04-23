import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/global';
import theme from '../src/styles/theme'

export const parameters = {
  backgrounds: {
    default: 'space-light',
    values: [
      {
        name: 'space-light',
        value: theme.colors.white
      },
      {
        name: 'space-dark',
        value: theme.colors.primary
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
