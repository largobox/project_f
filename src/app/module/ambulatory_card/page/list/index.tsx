import React, { PropsWithChildren, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import Layout from 'layout/default'
import Title from 'layout/default/title'
import Toolbar from 'layout/default/toolbar'
import Button from 'core/button'
import AmbulatoryCardGrid from 'module/ambulatory_card/component/grid/default'
import { ambulatoryCardGridItemsSelector } from 'module/ambulatory_card'

type PropsType = PropsWithChildren<{}>

const AmbulatoryCardListPage: React.FC<PropsType> = (props) => {
	const items = useRecoilValue(ambulatoryCardGridItemsSelector)
	const history = useHistory()
	const handleAddClick = () => history.push('/ambulatory-card/add')

	return (
		<Layout>
			<Title>Регистратура</Title>
			<Toolbar>
				<Button onClick={handleAddClick}>Добавить</Button>
			</Toolbar>
			<AmbulatoryCardGrid data={items} />
		</Layout>
	)
}

export default AmbulatoryCardListPage
