import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		palette: {
			primary: {
				main: string
			},
			secondary: {
				main: string
			},
			default: {
				main: string
			},
			paper: string,
			error: string
		}
		spacing: (value: number) => string
	}
}
