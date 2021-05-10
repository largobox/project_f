import React, { PropsWithChildren } from 'react'
import Grid from 'core/grid'
import Item from './item'
import { AmbulatoryCardT } from 'type'
import { useQuery } from 'hook'
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
	const { data, refresh } = useQuery(findAmbulatoryCard)
	const itemProps = {
		refreshGrid: refresh,
	}

	return (
		<Grid data={data} Item={Item} itemProps={itemProps} headers={headers} />
	)
}

export default AmbulatoryCardGrid
