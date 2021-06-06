import React from 'react'
import styled from 'styled-components'

import { Select } from 'core'
import { useQuery } from 'hook'
import { findGender } from 'api/gender'

const Container = styled.div``

type GenderSelectPropsT = {
	name?: string
	className?: string
	onChange?: () => void
	value?: any
}

const GenderSelect = (props: GenderSelectPropsT) => {
	const { className, name, onChange, value } = props
	const { response, loaded } = useQuery(findGender)

	return (
		<Select
			loaded={loaded}
			onChange={onChange}
			value={value}
			placeholder='выберите пол'
			name={name}
			labelField='label'
			valueField='value'
			options={response.data}
		/>
	)
}

export default styled(GenderSelect)``
