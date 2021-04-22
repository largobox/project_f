import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components'

const Container = styled.input`
	padding-top: ${({ theme }) => theme.spacing(1)};
	padding-bottom: ${({ theme }) => theme.spacing(1)};
	padding-left: ${({ theme }) => theme.spacing(2)};
	padding-right: ${({ theme }) => theme.spacing(2)};
	background-color: ${({ theme }) => theme.palette.paper};

	&::placeholder {
		color: ${({ theme }) => theme.palette.default};
	}

	border: none;

	&:focus {
		outline: none;
	}
`

type InputPropsT = {
	name?: string
	placeholder?: string
	onChange?: (value: string) => void
	value?: string | number
}

const Input = (props: InputPropsT) => {
	const { name, placeholder, onChange, value: initialValue } = props
	const [value, setValue] = useState(initialValue)

	const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
		setValue(ev.target.value)
		onChange && onChange(ev.target.value)
	}

	return (
		<Container
			onChange={handleChange}
			autoComplete='off'
			placeholder={placeholder}
			value={value}
		/>
	)
}

export default Input
