import React from 'react'
import styled from 'styled-components'

import { Select } from 'core'
import { useOption } from './hook'

const Container = styled.div``

type GenderSelectPropsT = {
	name?: string
	className?: string
	onChange?: () => void
	value?: any
}

const GenderSelect = (props: GenderSelectPropsT) => {
	const { className, name, onChange, value } = props
	const options = useOption()

	return (
		<Select
			onChange={onChange}
			value={value}
			placeholder='выберите пол'
			name={name}
			labelField='label'
			valueField='value'
			options={options}
		/>
	)
}

export default styled(GenderSelect)``
