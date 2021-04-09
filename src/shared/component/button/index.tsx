import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const Container = styled.button``

type Props = PropsWithChildren<{
	onClick: () => void
}>

const Button: React.FC<Props> = (props) => {
	const { children, onClick } = props

	return (
		<Container onClick={onClick}>
			{children}
		</Container>
	)
}

export default Button
