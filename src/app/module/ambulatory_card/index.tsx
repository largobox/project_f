import React from 'react'
import AmbulatoryCardListPage from 'module/ambulatory_card/page/list'
import AmbulatoryCardAddPage from 'module/ambulatory_card/page/add'
import AmbulatoryCardEditPage from 'module/ambulatory_card/page/edit'
import { Route, Switch } from 'react-router-dom'

function AmbulatoryCardModule() {
	return (
		<Switch>
			<Route path='/ambulatory-card' exact>
				<AmbulatoryCardListPage />
			</Route>
			<Route path='/ambulatory-card/add' exact>
				<AmbulatoryCardAddPage />
			</Route>
			<Route path='/ambulatory-card/:id/edit' exact>
				<AmbulatoryCardEditPage />
			</Route>
		</Switch>
	)
}

export default AmbulatoryCardModule
