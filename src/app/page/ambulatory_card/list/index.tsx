import React, { PropsWithChildren } from 'react'
import { useHistory } from 'react-router-dom'
import Layout from 'layout/default'
import Title from 'layout/default/title'
import Toolbar from 'layout/default/toolbar'
import Button from 'core/button'
import AmbulatoryCardGrid from './grid'

type Props = PropsWithChildren<{}>

const AmbulatoryCardListPage: React.FC<Props> = (props) => {
	const history = useHistory()
	const handleAddClick = () => history.push('/ambulatory-card/add')

	return (
		<Layout>
			<Title>Регистратура</Title>
			<Toolbar>
				<Button
					onClick={handleAddClick}
				>
					Добавить
				</Button>
			</Toolbar>
			<AmbulatoryCardGrid />
		</Layout>
	)
}

export default AmbulatoryCardListPage
