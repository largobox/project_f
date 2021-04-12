import React from 'react'
import styled from 'styled-components';
import Input from 'core/input'

type Props = {
	name: string
	label: string
	type?: string
}

type LabelProps = {
	htmlFor: string
}

const Container = styled.div`
	display: flex;
    flex-direction: column;
`;

const Label = styled.label<LabelProps>`
`;

const Field: React.FC<Props> = ({type = 'string', name, label}) => {
	return (
		<Container>
			<Label
				htmlFor={name}
			>
				{label}
			</Label>
			<Input
				name={name}
			/>
		</Container>
	)
}

export default Field