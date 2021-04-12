import React, { PropsWithChildren } from 'react';
import { AmbulatoryCardT }  from 'shared/type'
import styled from 'styled-components';

const Container = styled.div`
	padding: 6px;
	margin-bottom: 6px;
	background-color: darkgray;
	color: white;
	transition: .15s;

	&:hover {
		cursor: pointer;
		background-color: grey;
	}
`;

type Props = PropsWithChildren<{data: AmbulatoryCardT}>

const AmbulatoryCardItem: React.FC<Props> = (props) => {
	const { data } = props;

	return (
		<Container>
			<span>{data.fullName}</span>
			<span> ({data.updatedAt})</span>
		</Container>
	)
}

export default AmbulatoryCardItem;
