import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
	palette: {
		primary: {
			main: '#6aaf83',
			dark: '#3b7550',
			light: '#aeecc5'
		},
		secondary: {
			main: '#39887b',
			dark: '#277165',
			light: '#61a096'
		},
		default: {
			main: '#969284',
			dark: '#676459',
			light: '#d8d3c3'
		},
		paper: '#ffffff',
		error: '#f13838'
	},
	spacing: (value) => {
		return `${value * 8}px`
	},
	transition: {
		default: '0.3s',
	},
	borderRadius: '4px',
	zIndex: {
		dropdown: 1
	}
}

export default theme
