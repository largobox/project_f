import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const Container = styled.button``

type Props = PropsWithChildren<{
	onClick?: () => void
	type?: 'submit'
}>

const Button: React.FC<Props> = (props) => {
	const { children, onClick, type } = props

	return (
		<Container
			onClick={onClick}
			type={type}
		>
			{children}
		</Container>
	)
}

export default Button
