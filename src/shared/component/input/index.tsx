import React, { ChangeEvent } from 'react'
import styled from 'styled-components'
import { useFormContext } from 'react-hook-form'

const Container = styled.input`
	padding-top: ${({ theme }) => theme.spacing(0.5)};
	padding-bottom: ${({ theme }) => theme.spacing(0.5)};
	padding-left: ${({ theme }) => theme.spacing(2)};
	padding-right: ${({ theme }) => theme.spacing(2)};
	background-color: rgba(255, 255, 255, 0.5);
	border: none;

	&:focus {
		outline: none;
	}
`

type InputPropsT = {
	name: string
	placeholder?: string
	onChange?: (value: string) => void
}

const Input = (props: InputPropsT) => {
	const { name, placeholder, onChange } = props

	const formContext = useFormContext()

	const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
		onChange && onChange(ev.target.value)
	}

	return (
		<Container
			{...formContext?.register(name)}
			onChange={handleChange}
			autoComplete='off'
			placeholder={placeholder}
		/>
	)
}

export default Input
