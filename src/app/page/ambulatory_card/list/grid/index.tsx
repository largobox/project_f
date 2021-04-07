import React, { PropsWithChildren } from 'react'
import Grid from 'core/grid'
import Item from './item'

const data = [
	{
		id: '1',
		fullName: 'Вавилова С.В',
		updatedAt: '01.01.2021',
	},
	{
		id: '2',
		fullName: 'Паров С.В',
		updatedAt: '01.01.2022',
	},
	{
		id: '3',
		fullName: 'Ментовский С.В',
		updatedAt: '01.01.2023',
	},
]

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

type Props = PropsWithChildren<{}>

const AmbulatoryCardGrid: React.FC<Props> = (props) => {
	return <Grid initialData={data} Item={Item} headers={headers} />
}

export default AmbulatoryCardGrid
