import React from 'react'
import styled from 'styled-components'
import Input from 'core/input'
import Select from 'core/select'
import { useFormContext, Controller } from 'react-hook-form'

export type FieldPropsT = {
	label: string
	name: string
	children: React.ReactElement | React.ReactElement[]
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
	const { label, children, name } = props

	const formContext = useFormContext()
	const errors = formContext?.formState?.errors

	return (
		<Container>
			<Label htmlFor={name}>{label}</Label>

			{React.Children.map(children, (child) => {
{/*				const isInput = child.type === Input
				const isSelect = child.type === Select
				const isControlledComponent = isInput || isSelect*/}

				if (formContext) {
					return (
						<Controller
							name={name}
							render={({ field }) => {
								return (
									React.cloneElement(
										child,
										{
											name,
											onChange: field.onChange,
											value: field.value,
										}
									)
								)
							}}
						/>
					)
				}

				return React.cloneElement(child)
			})}

			{formContext && errors[name] && (
				<ErrorMessage>{errors[name].message}</ErrorMessage>
			)}
		</Container>
	)
}

export default Field
