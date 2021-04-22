import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
	palette: {
		primary: {
			main: '',
		},
		secondary: {
			main: '',
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
	zIndex: {
		dropdown: 1
	}
}

export default theme
