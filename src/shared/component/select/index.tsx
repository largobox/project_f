import React, { ChangeEvent, useRef, useState } from 'react'
import styled from 'styled-components'
import RCSelect, { Option } from 'rc-select'
import { FaChevronDown as InputIcon } from 'react-icons/fa'

const Container = styled.div`
	.rc-select {
		background-color: ${({ theme }) => theme.palette.paper};
		position: relative;
		cursor: pointer;
	}

	.rc-select-single .rc-select-selection-item {
		position: absolute;
		left: 16px;
		top: 8px;
	}

	.rc-select-multiple .rc-select-selection-item {
		background-color: ${({ theme }) => theme.palette.default.light};
	}

	.rc-select-show-arrow {
	}

	.rc-select-dropdown-hidden {
		display: none;
	}

	.rc-select-arrow {
		position: absolute;
		right: 8px;
		top: 8px;
		pointer-events: none;
	}

	.rc-select-selection-search .rc-select-selection-search-mirror {
		display: none;
	}

	.rc-select-selection-search-input {
		padding-top: ${({ theme }) => theme.spacing(1)};
		padding-bottom: ${({ theme }) => theme.spacing(1)};
		padding-left: ${({ theme }) => theme.spacing(2)};
		padding-right: ${({ theme }) => theme.spacing(2)};
		cursor: pointer;
		border: none;

		&:focus {
			outline: none;
		}
	}

	.rc-select-selection-placeholder {
		color: ${({ theme }) => theme.palette.default.main};
		position: absolute;
		left: 16px;
		top: 8px;
	}

	.rc-select-dropdown {
		background-color: ${({ theme }) => theme.palette.paper};
		z-index: ${({ theme }) => theme.zIndex.dropdown};
	}

	.rc-select-item {
		display: flex;
		justify-content: space-between;
		padding-top: ${({ theme }) => theme.spacing(0.5)};
		padding-bottom: ${({ theme }) => theme.spacing(0.5)};
		padding-left: ${({ theme }) => theme.spacing(2)};
		padding-right: ${({ theme }) => theme.spacing(2)};
		cursor: pointer;

		&:hover {
			background-color: ${({ theme }) => theme.palette.default.light};
		}
	}

	.rc-select-item-option-selected {
		background-color: ${({ theme }) => theme.palette.default.main};
	}

	.rc-select-selection-overflow {
		display: flex;
	}
`

type SelectPropsT = {
	name: string
	placeholder?: string
	onChange?: (value: string) => void
	value?: string | null
	labelField?: string
	valueField?: string
	options: object[]
}

const Select = (props: SelectPropsT) => {
	const {
		name,
		placeholder,
		onChange,
		options,
		labelField = 'value',
		valueField = 'key',
		value: initialValue,
	} = props

	const containerRef = useRef()
	const [value, setValue] = useState(initialValue)

	const handleChange = (value: string): void => {
		setValue(value)
		onChange && onChange(value)
	}

	return (
		<Container ref={containerRef}>
			<RCSelect
				inputIcon={<InputIcon />}
				getPopupContainer={() => containerRef.current}
				placeholder={placeholder}
				onChange={handleChange}
				value={value}
			>
				{options.map((option: any) => (
					<Option
						key={option[valueField]}
						title={option[labelField]}
						value={option[valueField]}
					>
						{option[labelField]}
					</Option>
				))}
			</RCSelect>
		</Container>
	)
}

export default Select
