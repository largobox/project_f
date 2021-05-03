import React from 'react'
import AmbulatoryCardListPage from 'module/ambulatory_card/page/list'
import AmbulatoryCardAddPage from 'module/ambulatory_card/page/add'
import AmbulatoryCardEditPage from 'module/ambulatory_card/page/edit'
import { Route, Switch } from 'react-router-dom'
import { findAmbulatoryCard, findOneAmbulatoryCard } from 'api/ambulatory_card'
import { selector, selectorFamily, atom, useRecoilState } from 'recoil'

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

export const ambulatoryCardGridRequestIDAtom = atom({
	key: 'ambulatoryCardGridRequestID',
	default: 0,
})

export const useRefreshAmbulatoryCardGrid = () => {
	const [requestID, setRequestID] = useRecoilState(
		ambulatoryCardGridRequestIDAtom
	)

	return () => setRequestID(requestID + 1)
}

export const ambulatoryCardGridItemsSelector = selector({
	key: 'AmbulatoryCardItems',
	get: async ({ get }) => {
		get(ambulatoryCardGridRequestIDAtom)
		const ambulatoryCards = await findAmbulatoryCard()

		return ambulatoryCards
	},
})

export const ambulatoryCardEditFormDataSelector = selectorFamily({
	key: 'ambulatoryCardEditFormData',
	get: (ambulatoryCardId: string) => async () => {
		const ambulatoryCard = await findOneAmbulatoryCard(ambulatoryCardId)

		return ambulatoryCard
	},
})

export default AmbulatoryCardModule
