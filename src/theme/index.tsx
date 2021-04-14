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
			main: '',
		},
		paper: '#ffffff',
		error: '#f13838'
	},
	spacing: (value) => {
		return `${value * 8}px`
	},
}

export default theme
