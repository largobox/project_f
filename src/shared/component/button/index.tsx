import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

type Props = PropsWithChildren<{
	className?: string
	onClick?: () => void
	type?: 'submit'
	color?: 'primary' | 'secondary' | 'default'
	isSelected?: boolean
}>

const Container = styled.button<Props>`
	outline: none;
	border: none;
	padding-top: ${({ theme }) => theme.spacing(1.25)};
	padding-bottom: ${({ theme }) => theme.spacing(1.25)};
	padding-left: ${({ theme }) => theme.spacing(2)};
	padding-right: ${({ theme }) => theme.spacing(2)};
	border-radius: ${({ theme }) => theme.borderRadius};
	transition: ${({ theme }) => theme.transition.default};
	cursor: pointer;

	${({ color, theme, isSelected }) => {
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

		if (color === 'default' && !isSelected) {
			return `
				background-color: ${theme.palette.default.light};

				&:hover {
					background-color: ${theme.palette.default.main};
				}
			`
		}

		if (color === 'default' && isSelected) {
			return `
				background-color: ${theme.palette.default.dark};

				&:hover {
					background-color: ${theme.palette.default.main};
				}
			`
		}
	}}
`

const Content = styled.div`
	display: flex;
`

const Button: React.FC<Props> = (props) => {
	const {
		className,
		children,
		onClick,
		type,
		color = 'default',
		isSelected = false,
	} = props

	return (
		<Container
			className={className}
			onClick={onClick}
			type={type}
			color={color}
			isSelected={isSelected}
		>
			<Content>{children}</Content>
		</Container>
	)
}

export default styled(Button)``
