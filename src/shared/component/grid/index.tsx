import React, { PropsWithChildren, useState } from 'react'
import styled from 'styled-components'
import Pagination from './pagination'
import { UseQueryApiFuncT } from 'type'
import { useQuery } from 'hook'
import Preloader from 'shared/component/preloader'

const Container = styled.div``

type Props = PropsWithChildren<{
	headers: { name: string; label: string; size: number }[]
	Item: React.FC<{ data: {} }>
	getDataFunc: UseQueryApiFuncT
}>

type ItemData = {
	id: string
}

const perPage = 3;

const Grid: React.FC<Props> = (props) => {
	const { Item, getDataFunc } = props
	const [page, setPage] = useState(1)
	const { response, refresh, loaded } = useQuery(
		getDataFunc,
		{ params: { perPage, page } }
	)

	const itemProps = {
		refreshGrid: refresh,
	}

	if (!loaded) return <Preloader />

	const isEmpty = response.data?.length === 0

	const handlePageChange = (value: number) => {
		setPage(value)

		refresh({
			page: value,
			perPage
		})
	}

	return (
		<Container>
			{isEmpty && <span>Таблица пуста</span>}

			{response.data.map((item: ItemData) => (
				<Item key={item.id} data={item} {...itemProps} />
			))}

			<Pagination
				onChange={handlePageChange}
				page={page}
				perPage={perPage}
				count={response.count}
			/>
		</Container>
	)
}

export default Grid
