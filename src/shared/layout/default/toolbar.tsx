import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

type Props = PropsWithChildren<{className?: string}>;

const Container = styled.div`
`;

const Toolbar: React.FC<Props> = (props) => {
	const {
		children,
		className,
	} = props;

	return (
		<Container className={className}>
			{children}
		</Container>
	);
};

export default styled(Toolbar)``;
