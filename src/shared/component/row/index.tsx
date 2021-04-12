import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const Container = styled.div`
	background-color: green;
`

type Props = PropsWithChildren<{}>

const Row: React.FC<Props> = (props) => {
	const { children } = props

	return <Container>{children}</Container>
}

export default Row
