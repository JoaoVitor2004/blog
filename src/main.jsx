import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './GlobalStyles.jsx'
import { Theme } from './Theme.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={Theme}>
    <StrictMode>
      <GlobalStyles />
      <App />
    </StrictMode>
  </ThemeProvider>
)
