import React  from 'react'
import styled from 'styled-components'
import Input from 'core/input'
import { useFormContext } from 'react-hook-form'

export type FieldPropsT = {
	label: string
	children: React.ReactElement
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
`

const ErrorMessage = styled.span`
	color: ${({ theme }) => theme.palette.error};
`

const Label = styled.label``

const Field = (props: FieldPropsT) => {
	const { label, children } = props
	const fieldName = children.props.name

	const formContext = useFormContext()
	const errors = formContext?.formState?.errors

	return (
		<Container>
			<Label htmlFor={fieldName}>{label}</Label>
			{children}
			{formContext && errors[fieldName] && (
				<ErrorMessage>{errors[fieldName].message}</ErrorMessage>
			)}
		</Container>
	)
}

export default Field
