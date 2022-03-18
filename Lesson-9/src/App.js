import React from 'react'
import Router from './components/Router'
import { ThemeProvider } from 'styled-components'
import theme from './utils/theme'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router />
		</ThemeProvider>
	)
}

export default App
