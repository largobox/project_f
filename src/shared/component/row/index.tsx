import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const Container = styled.div``

type RowPropsT = PropsWithChildren<{ className?: string }>

const Row = (props: RowPropsT) => {
	const { className, children } = props

	return <Container className={className}>{children}</Container>
}

export default styled(Row)``
