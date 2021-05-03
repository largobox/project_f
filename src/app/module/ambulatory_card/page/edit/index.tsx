import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router-dom'
import Layout from 'layout/default'
import Title from 'layout/default/title'
import Toolbar from 'layout/default/toolbar'
import FormLayout from 'layout/form'
import Button from 'core/button'
import Form from 'module/ambulatory_card/component/form/default'
import { useRecoilValue } from 'recoil'
import { ambulatoryCardEditFormDataSelector } from 'module/ambulatory_card'

type Props = PropsWithChildren<{}>

const FormContainer = styled.div`
	width: 500px;
`

const AmbulatoryCardAddPage: React.FC<Props> = (props) => {
	const history = useHistory()
	const { id } = useParams<{id: string}>()
	const handleSaveClick = () => console.log('Save clicked')
	const initialData = useRecoilValue(ambulatoryCardEditFormDataSelector(id))

	return (
		<Layout>
			<Title>Редактировать карту пациента</Title>
			<Toolbar>
				<Button onClick={handleSaveClick}>Сохранить</Button>
			</Toolbar>
			<FormContainer>
				<FormLayout>
					<Form initialData={initialData} />
				</FormLayout>
			</FormContainer>
		</Layout>
	)
}

export default AmbulatoryCardAddPage
