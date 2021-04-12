import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

type Props = PropsWithChildren<{className?: string}>;

const Container = styled.div`
`;

const Title: React.FC<Props> = (props) => {
	const {
		children,
		className,
	} = props;

	return (
		<Container className={className}>
			<h2>{children}</h2>
		</Container>
	);
};

export default styled(Title)``;
