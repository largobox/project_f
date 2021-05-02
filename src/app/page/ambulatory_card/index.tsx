import React from 'react';
import AmbulatoryCardListPage from 'page/ambulatory_card/list';
import AmbulatoryCardAddPage from 'page/ambulatory_card/add';
import ServiceList from 'page/service/list';
import { Route, Switch } from 'react-router-dom';
import { findAmbulatoryCard } from 'api/ambulatory_card';
import { selector } from 'recoil';

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

export const ambulatoryCardGridItemsSelector = selector({
	key: 'AmbulatoryCardItems',
	get: async ({ get }) => {
		const items = await findAmbulatoryCard()

		return items
	},
})

export default AmbulatoryCardPages;
