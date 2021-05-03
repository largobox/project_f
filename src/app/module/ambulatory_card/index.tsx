import React from 'react'
import AmbulatoryCardListPage from 'module/ambulatory_card/page/list'
import AmbulatoryCardAddPage from 'module/ambulatory_card/page/add'
import AmbulatoryCardEditPage from 'module/ambulatory_card/page/edit'
import { Route, Switch } from 'react-router-dom'
import { findAmbulatoryCard, findOneAmbulatoryCard } from 'api/ambulatory_card'
import { selector, selectorFamily, atom, atomFamily, useRecoilState } from 'recoil'

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

// Grid
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

// Form
export const ambulatoryCardEditFormDataRequestIDAtom = atom({
	key: 'ambulatoryCardEditFormDataRequestID',
	default: 0,
})

export const useRefreshAmbulatoryCardEditForm = () => {
	const [requestID, setRequestID] = useRecoilState(
		ambulatoryCardEditFormDataRequestIDAtom
	)

	return () => setRequestID(requestID + 1)
}

export const ambulatoryCardEditFormDataSelector = selectorFamily({
	key: 'ambulatoryCardEditFormData',
	get: (ambulatoryCardId: string) => async ({ get }) => {
		get(ambulatoryCardEditFormDataRequestIDAtom)
		const ambulatoryCard = await findOneAmbulatoryCard(ambulatoryCardId)

		return ambulatoryCard
	},
})

export default AmbulatoryCardModule
