import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import { ThemeProvider, createTheme } from '@mui/material'
import { store, persistor } from '../src/store'
import { Provider } from 'react-redux'
import { Router } from './components/Router/index.js'
import { PersistGate } from 'redux-persist/integration/react'
import { Parent } from './components/Arcticles/Count'

// const theme = createTheme({
// 	palette: {
// 		primary: {
// 			main: '#61dafb',
// 		},
// 	},
// })

ReactDOM.render(
	<React.StrictMode>
		{/* <ThemeProvider theme={theme}> */}
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Router />
			</PersistGate>
		</Provider>
		{/* </ThemeProvider> */}
	</React.StrictMode>,
	document.getElementById('root'),
)
