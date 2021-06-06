import React from 'react'
import { Grid } from 'core'
import Item from './item'
import { findAmbulatoryCard } from 'api/ambulatory_card'

const headers = [
	{
		name: 'fullName',
		label: 'ФИО',
		size: 6,
	},
	{
		name: 'updatedAt',
		label: 'Дата редактирования',
		size: 6,
	},
]

const AmbulatoryCardGrid: React.FC = () => {
	return (
		<Grid
			getDataFunc={findAmbulatoryCard}
			Item={Item}
			headers={headers}
		/>
	)
}

export default AmbulatoryCardGrid
