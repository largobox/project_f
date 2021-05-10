import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const Container = styled.div``

type Props = PropsWithChildren<{
	data: {id: string}[]
	headers: {name: string, label: string, size: number}[]
	Item: React.FC<{ data: {} }>
	itemProps: object
}>

const Grid: React.FC<Props> = (props) => {
	const { data, Item, itemProps } = props
	const isEmpty = data?.length === 0

	if (data === null) return null

	return (
		<Container>
			{isEmpty && (
				<span>Таблица пуста</span>
			)}
			{data.map((item) => (
				<Item key={item.id} data={item} {...itemProps}/>
			))}
		</Container>
	)
}

export default Grid
