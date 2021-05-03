import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import Button from 'core/button'

const Container = styled.div`
	${Button} {
		:first-child {
			margin-right: ${({theme}) => theme.spacing(0.5)};
		}

		:last-child {
			margin-left: ${({theme}) => theme.spacing(0.5)};
		}

		:not(:first-child):not(:last-child) {
			margin-right: ${({theme}) => theme.spacing(0.5)};
			margin-left: ${({theme}) => theme.spacing(0.5)};
		}
	}
`

type ButtonGroupPropsT = PropsWithChildren<{ className?: string }>

const ButtonGroup = (props: ButtonGroupPropsT) => {
	const { className, children } = props

	return <Container className={className}>{children}</Container>
}

export default styled(ButtonGroup)``
