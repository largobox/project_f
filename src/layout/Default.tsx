import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

type Props = {
	children: PropsWithChildren<{}>;
};

const Container = styled.div`
	background-color: lightblue;
`;

function DefaultLayout(props: Props) {
	const { children } = props;

	return (
		<Container>{children}</Container>
	);
}

export default DefaultLayout;
