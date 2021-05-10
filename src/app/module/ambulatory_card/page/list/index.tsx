import React, { PropsWithChildren, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Layout from 'layout/default'
import Title from 'layout/default/title'
import Toolbar from 'layout/default/toolbar'
import { Button, Typography } from 'core'
import AmbulatoryCardGrid from 'module/ambulatory_card/component/grid/default'
import { useQuery } from 'hook'
import { findAmbulatoryCard } from 'api/ambulatory_card'

type PropsType = PropsWithChildren<{}>

const AmbulatoryCardListPage: React.FC<PropsType> = (props) => {
	const { data } = useQuery(findAmbulatoryCard)
	const history = useHistory()
	const handleAddClick = () => history.push('/ambulatory-card/add')

	return (
		<Layout>
			<Title>Регистратура</Title>
			<Toolbar>
				<Button onClick={handleAddClick}>
					<Typography>Добавить</Typography>
				</Button>
			</Toolbar>
			<AmbulatoryCardGrid data={data} />
		</Layout>
	)
}

export default AmbulatoryCardListPage
