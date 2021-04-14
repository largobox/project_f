import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import Row from 'core/row'
import Column from 'core/column'
import Form from 'core/form'

type Props = PropsWithChildren<{}>

const Container = styled.div`
	${Form} {
		${Row}:not(:last-child) {
			margin-bottom: ${({ theme }) => theme.spacing(2)};
		}

		${Column} {
			box-sizing: border-box;
			padding-left: ${({ theme }) => theme.spacing(1)};
			padding-right: ${({ theme }) => theme.spacing(1)};

			&:first-child {
				padding-left: 0px;
			}

			&:last-child {
				padding-right: 0px;
			}

			&:only-child {
				padding-left: 0px;
				padding-right: 0px;
			}
		}
	}
`

const FormLayout = (props: Props) => {
	const { children } = props

	return <Container>{children}</Container>
}

export default FormLayout
