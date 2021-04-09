import React, { PropsWithChildren } from 'react'
import { useHistory } from 'react-router-dom'
import Layout from 'layout/default'
import Title from 'layout/default/title'
import Toolbar from 'layout/default/toolbar'
import Button from 'core/button'

type Props = PropsWithChildren<{}>

const AmbulatoryCardAddPage: React.FC<Props> = (props) => {
	const history = useHistory()
	const handleSaveClick = () => console.log('Save clicked')

	return (
		<Layout>
			<Title>Добавить карту</Title>
			<Toolbar>
				<Button
					onClick={handleSaveClick}
				>
					Сохранить
				</Button>
			</Toolbar>
			<h2>Add form</h2>
		</Layout>
	)
}

export default AmbulatoryCardAddPage
