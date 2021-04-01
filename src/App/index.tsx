import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import { Route, Switch, Redirect } from 'react-router-dom';

const Container = styled.div`
	background-color: pink;
	display: grid;
	grid-template-columns: 200px 1fr;
`;

const ContentContainer = styled.div`
	background-color: lightblue;
`;

function App() {
	return (
		<Container>
			<Menu />
			<Switch>
				<Route exact path="/">
					<Redirect to="/ambulatory-card" />
				</Route>
				<Route path="/ambulatory-card">
					<ContentContainer>
						<h2>Регистратура</h2>
					</ContentContainer>
				</Route>
				<Route path="/service">
					<ContentContainer>
						<h2>Услуги</h2>
					</ContentContainer>
				</Route>
			</Switch>
		</Container>
	);
}

export default App;
