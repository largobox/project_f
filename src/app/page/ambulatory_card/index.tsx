import React from 'react';
import AmbulatoryCardListPage from 'page/ambulatory_card/list';
import AmbulatoryCardAddPage from 'page/ambulatory_card/add';
import ServiceList from 'page/service/list';
import { Route, Switch } from 'react-router-dom';

function AmbulatoryCardPages() {
	return (
		<Switch>
			<Route path="/ambulatory-card" exact>
				<AmbulatoryCardListPage />
			</Route>
			<Route path="/ambulatory-card/add" exact>
				<AmbulatoryCardAddPage />
			</Route>
		</Switch>
	);
}

export default AmbulatoryCardPages;
