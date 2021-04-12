import React, { PropsWithChildren } from 'react'
import styled from 'styled-components';

const Container = styled.input`
`;

type Props = {
	name: string
	type?: string
}

const Input: React.FC<Props> = ({type = 'string'}) => {
	return <Container />
}

export default Input