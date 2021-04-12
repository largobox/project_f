import React, { PropsWithChildren } from 'react'
import { useHistory } from 'react-router-dom'
import Layout from 'layout/default'
import Title from 'layout/default/title'
import Toolbar from 'layout/default/toolbar'
import Button from 'core/button'
import Form from './form'

type Props = PropsWithChildren<{}>

const AmbulatoryCardAddPage: React.FC<Props> = (props) => {
	const history = useHistory()
	const handleSaveClick = () => console.log('Save clicked')

	return (
		<Layout>
			<Title>Добавить карту пациента</Title>
			<Toolbar>
				<Button
					onClick={handleSaveClick}
				>
					Сохранить
				</Button>
			</Toolbar>
			<Form />
		</Layout>
	)
}

export default AmbulatoryCardAddPage
