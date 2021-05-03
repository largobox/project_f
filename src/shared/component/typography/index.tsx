import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const Container = styled.span``

type TypographyPropsT = PropsWithChildren<{ className?: string }>

const Typography = (props: TypographyPropsT) => {
	const { className, children } = props

	return <Container className={className}>{children}</Container>
}

export default styled(Typography)``
