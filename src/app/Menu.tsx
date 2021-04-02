import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100vh;
	background-color: pink;
`;

const Item = styled.div`
	background-color: lightcoral;
	color: white;
	margin-bottom: 12px;
	height: 40px;
	line-height: 40px;
	text-align: center;

	&:hover {
		cursor: pointer;
		background-color: indianred;
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
	console.log('Menu. Must render only: 1');

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
