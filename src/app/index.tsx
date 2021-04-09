import React from 'react';
import styled from 'styled-components';
import Menu from 'common/navigation';
import { Route, Switch, Redirect } from 'react-router-dom';
import AmbulatoryCardPages from 'page/ambulatory_card';
import ServicePages from 'page/service';

const Container = styled.div`
	background-color: pink;
	display: grid;
	grid-template-columns: 200px 1fr;
`;

function App() {
	return (
		<Container>
			<Menu />
			<Switch>
				<Route path="/ambulatory-card">
					<AmbulatoryCardPages />
				</Route>
				<Route path="/service">
					<ServicePages />
				</Route>
				<Route exact path="/">
					<Redirect to="/ambulatory-card" />
				</Route>
			</Switch>
		</Container>
	);
}

export default App;
