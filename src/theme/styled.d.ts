import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		palette: {
			primary: {
				main: string
				dark: string
				light: string
			},
			secondary: {
				main: string
				dark: string
				light: string
			},
			default: {
				main: string
				dark: string
				light: string
			},
			paper: string,
			error: string
		}
		spacing: (value: number) => string,
		borderRadius: string,
		transition: {
			default: string
		}
		zIndex: {
			dropdown: number
		}
	}
}
