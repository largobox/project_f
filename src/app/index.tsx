import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import AmbulatoryCardList from 'page/ambulatory_card/list';
import ServiceList from 'page/service/list';
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
					<AmbulatoryCardList />
				</Route>
				<Route path="/service">
					<ServiceList />
				</Route>
			</Switch>
		</Container>
	);
}

export default App;
