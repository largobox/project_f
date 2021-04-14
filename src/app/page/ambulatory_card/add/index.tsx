import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import Layout from 'layout/default'
import Title from 'layout/default/title'
import Toolbar from 'layout/default/toolbar'
import FormLayout from 'layout/form'
import Button from 'core/button'
import Form from './form'

type Props = PropsWithChildren<{}>

const FormContainer = styled.div`
	width: 500px;
`

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
			<FormContainer>
				<FormLayout>
					<Form />
				</FormLayout>
			</FormContainer>
		</Layout>
	)
}

export default AmbulatoryCardAddPage
