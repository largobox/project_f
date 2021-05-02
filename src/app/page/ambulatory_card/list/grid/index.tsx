import React, { PropsWithChildren } from 'react'
import Grid from 'core/grid'
import Item from './item'
import { AmbulatoryCardT } from 'type'

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

type Props = PropsWithChildren<{
	data: AmbulatoryCardT[]
}>

const AmbulatoryCardGrid: React.FC<Props> = (props) => {
	const { data } = props

	return <Grid data={data} Item={Item} headers={headers} />
}

export default AmbulatoryCardGrid
