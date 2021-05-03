import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Title from './title';
import Toolbar from './toolbar';

type PropsT = PropsWithChildren<{}>;

const Container = styled.div`
	width: 1200px;

	${Title} {
		display: inline-block;
		margin-right: ${props => props.theme.spacing(2)}
	}

	${Toolbar} {
		display: inline-block;
	}
`;

const DefaultLayout = (props: PropsT) => {
	const { children } = props;

	return (
		<Container>
			{children}
		</Container>
	);
};

export default DefaultLayout;
