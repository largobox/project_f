import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

type PropsT = PropsWithChildren<{ className?: string }>

const Container = styled.div``

const Title = (props: PropsT) => {
	const { children, className } = props

	return (
		<Container className={className}>
			<h2>{children}</h2>
		</Container>
	)
}

export default styled(Title)``
