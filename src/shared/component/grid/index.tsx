import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const Container = styled.div``

type Props = PropsWithChildren<{
	initialData: {id: string}[]
	headers: {name: string, label: string, size: number}[]
	Item: React.FC<{ data: {} }>
}>

const Grid: React.FC<Props> = (props) => {
	const { initialData, Item } = props

	return (
		<Container>
			{initialData.map((item) => (
				<Item key={item.id} data={item} />
			))}
		</Container>
	)
}

export default Grid
