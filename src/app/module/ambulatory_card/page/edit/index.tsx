import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import Layout from 'layout/default'
import Title from 'layout/default/title'
import Toolbar from 'layout/default/toolbar'
import FormLayout from 'layout/form'
import { Button, Typography } from 'core'
import Form from 'module/ambulatory_card/component/form/default'
import { ambulatoryCardEditFormDataSelector } from 'module/ambulatory_card'
import { AmbulatoryCardInputT } from 'type'
import { useRefreshAmbulatoryCardGrid, useRefreshAmbulatoryCardEditForm } from 'module/ambulatory_card'
import { updateAmbulatoryCard } from 'api/ambulatory_card'

type Props = PropsWithChildren<{}>

const FormContainer = styled.div`
	width: 500px;
`

const AmbulatoryCardAddPage: React.FC<Props> = (props) => {
	const history = useHistory()
	const { id } = useParams<{id: string}>()
	const handleSaveClick = () => console.log('Save clicked')
	const initialData = useRecoilValue(ambulatoryCardEditFormDataSelector(id))
	const refreshAmbulatoryCardGrid = useRefreshAmbulatoryCardGrid()
	const refreshAmbulatoryCardEditForm = useRefreshAmbulatoryCardEditForm()

	const handleSumbit = async (data: AmbulatoryCardInputT) => {
		await updateAmbulatoryCard(data)

		refreshAmbulatoryCardGrid()
		refreshAmbulatoryCardEditForm()

		history.push('/ambulatory-card')
	}

	return (
		<Layout>
			<Title>Редактировать карту пациента</Title>
			<Toolbar>
				<Button onClick={handleSaveClick}>
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
