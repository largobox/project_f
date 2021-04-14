import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

type Props = PropsWithChildren<{
	xs: number
	className?: string
}>

const Container = styled.div<Props>`
	display: inline-block;
	width: ${({ xs }) => xs / 12 * 100}%;
`

const Column = (props: Props) => {
	const {
		className,
		children,
		xs
	} = props

	return (
		<Container
			xs={xs}
			className={className}
		>
			{children}
		</Container>
	)
}

export default styled(Column)``
