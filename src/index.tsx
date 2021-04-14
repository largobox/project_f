import React from 'react'
import ReactDOM from 'react-dom'

import 'locale/ru/validation_message';
import 'normalize.css'
import theme from './theme';
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import App from './app'

ReactDOM.render(
	<Router>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Router>,
	document.getElementById('root')
)
