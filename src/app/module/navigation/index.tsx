import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100vh;
	background-color: ${({ theme }) => theme.palette.secondary.light};
`;

const Item = styled.div`
	background-color: ${({ theme }) => theme.palette.secondary.main};
	color: white;
	margin-bottom: 12px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	cursor: pointer;
	transition: ${({ theme }) => theme.transition.default};

	&:hover {
		background-color: ${({ theme }) => theme.palette.secondary.dark};
	}
`;

const items = [
	{
		label: 'Регистратура',
		name: 'ambulatory-card',
	},
	{
		label: 'Услуги',
		name: 'service',
	},
];

function Menu() {
	const history = useHistory();

	return (
		<Container>
			{items.map((item) => (
				<Item onClick={() => history.push(`/${item.name}`)} key={item.name}>
					{item.label}
				</Item>
			))}
		</Container>
	);
}

export default Menu;
