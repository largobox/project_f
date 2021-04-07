import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

type Props = PropsWithChildren<{ title: string }>;

const Container = styled.div`
	background-color: lightblue;
`;

const DefaultLayout: React.FC<Props> = (props) => {
	const { children, title } = props;

	return (
		<Container>
			<h2>{title}</h2>
			{children}
		</Container>
	);
};

export default DefaultLayout;
