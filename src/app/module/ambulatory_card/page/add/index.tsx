import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import Layout from 'layout/default'
import Title from 'layout/default/title'
import Toolbar from 'layout/default/toolbar'
import FormLayout from 'layout/form'
import { Button, Typography } from 'core'
import Form from 'module/ambulatory_card/component/form/default'
import { createAmbulatoryCard } from 'api/ambulatory_card'
import { AmbulatoryCardInputT } from 'type'

type Props = PropsWithChildren<{}>

const FormContainer = styled.div`
	width: 500px;
`

const initialData = {
	firstName: 'Some name',
	surname: '',
}

const AmbulatoryCardAddPage: React.FC<Props> = (props) => {
	const history = useHistory()
	const handleSaveClick = () => console.log('Save clicked')

	const handleSumbit = async (values: AmbulatoryCardInputT) => {
		await createAmbulatoryCard(values)

		history.push('/ambulatory-card')
	}

	return (
		<Layout>
			<Title>Добавить карту пациента</Title>
			<Toolbar>
				<Button
					onClick={handleSaveClick}
				>
					<Typography>Сохранить</Typography>
				</Button>
			</Toolbar>
			<FormContainer>
				<FormLayout>
					<Form onSubmit={handleSumbit} initialData={initialData} />
				</FormLayout>
			</FormContainer>
		</Layout>
	)
}

export default AmbulatoryCardAddPage
