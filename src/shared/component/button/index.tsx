import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const Container = styled.button`
	outline: none;
	border: none;
	padding-top: ${({theme}) => theme.spacing(1)};
	padding-bottom: ${({theme}) => theme.spacing(1)};
	padding-left: ${({theme}) => theme.spacing(2)};
	padding-right: ${({theme}) => theme.spacing(2)};
	border-radius: ${({theme}) => theme.borderRadius};
	transition: ${({ theme }) => theme.transition.default};
	cursor: pointer;

	${({color, theme}) => {
		if (color === 'primary') {
			return `
				background-color: ${theme.palette.primary.main};
				color: ${theme.palette.default.light};

				&:hover {
					background-color: ${theme.palette.primary.dark};
				}
			`
		}

		if (color === 'secondary') {
			return `
				background-color: ${theme.palette.secondary.main};
				color: ${theme.palette.default.light};

				&:hover {
					background-color: ${theme.palette.secondary.dark};
				}
			`
		}

		if (color === 'default') {
			return `
				background-color: ${theme.palette.default.light};

				&:hover {
					background-color: ${theme.palette.default.main};
				}
			`
		}
	}}
`

type Props = PropsWithChildren<{
	className?: string
	onClick?: () => void
	type?: 'submit'
	color?: 'primary' | 'secondary' | 'default'
}>

const Button: React.FC<Props> = (props) => {
	const { className, children, onClick, type, color = 'default' } = props

	return (
		<Container className={className} onClick={onClick} type={type} color={color}>
			{children}
		</Container>
	)
}

export default styled(Button)``
