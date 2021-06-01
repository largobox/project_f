import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import 'normalize.css'
import theme from './theme'
import 'locale/ru/validation_message' // Должно импортироваться до импорта компонента App
import App from './app'
import ErrorBoundary from 'error/error_boundary'

ReactDOM.render(
	<Router>
		<ThemeProvider theme={theme}>
			<ErrorBoundary>
				<App />
			</ErrorBoundary>
		</ThemeProvider>
	</Router>,
	document.getElementById('root')
)
