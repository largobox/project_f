import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
	height: 100vh;
	background-color: pink;
`;

const items = [
	{
		label: 'Услуги',
		name: 'service',
	},
	{
		label: 'Регистратура',
		name: 'ambulatory-card',
	},
];

function Menu() {
	const history = useHistory();
	function handleClick() {
		console.log('The link was clicked.');
	}
	console.log('Menu rendered');

	return (
		<Container>
			{items.map((item) => (
				<li onClick={() => history.push(`/${item.name}`)} key={item.name}>
					{item.label}
				</li>
			))}
		</Container>
	);
}

export default Menu;
