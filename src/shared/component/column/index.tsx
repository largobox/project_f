import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const Container = styled.div`
	background-color: lightgreen;
`

type Props = PropsWithChildren<{
	xs: number
}>

const Column: React.FC<Props> = (props) => {
	const {
		children,
		xs
	} = props

	return <Container>{children}</Container>
}

export default Column
