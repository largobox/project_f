import React, { PropsWithChildren, useState } from 'react'
import styled from 'styled-components'
import Pagination from './pagination'

const Container = styled.div``

type Props = PropsWithChildren<{
	data: { id: string }[]
	headers: { name: string; label: string; size: number }[]
	Item: React.FC<{ data: {} }>
	itemProps: object
}>

const Grid: React.FC<Props> = (props) => {
	const [page, setPage] = useState(1)
	const { data, Item, itemProps } = props
	const isEmpty = data?.length === 0
	const perPage = 10
	const count = 32

	if (data === null) return null

	const handlePageChange = (value: number) => {
		setPage(value)
	}

	return (
		<Container>
			{isEmpty && <span>Таблица пуста</span>}
			{data.map((item) => (
				<Item key={item.id} data={item} {...itemProps} />
			))}
			<Pagination onChange={handlePageChange} page={page} perPage={perPage} count={count} />
		</Container>
	)
}

export default Grid
