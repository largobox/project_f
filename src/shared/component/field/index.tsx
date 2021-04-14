import React from 'react'
import styled from 'styled-components'
import Input from 'core/input'
import { useFormContext } from 'react-hook-form'

export type FieldPropsT = {
	name: string
	label: string
	type?: string
	placeholder?: string
	onChange?: (value: any) => void
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
	const { type = 'string', name, label, placeholder, onChange } = props

	const formContext = useFormContext()
	const errors = formContext?.formState?.errors

	return (
		<Container>
			<Label htmlFor={name}>{label}</Label>
			<Input placeholder={placeholder} name={name} onChange={onChange} />
			{formContext && errors[name] && (
				<ErrorMessage>{errors[name].message}</ErrorMessage>
			)}
		</Container>
	)
}

export default Field
