import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router-dom'

import Layout from 'layout/default'
import Title from 'layout/default/title'
import Toolbar from 'layout/default/toolbar'
import FormLayout from 'layout/form'
import { Button, Typography } from 'core'
import Form from 'module/ambulatory_card/component/form/default'
import { AmbulatoryCardInputT } from 'type'
import { useQuery } from 'hook'
import {
	updateAmbulatoryCard,
	findOneAmbulatoryCard,
} from 'api/ambulatory_card'

type Props = PropsWithChildren<{}>

const FormContainer = styled.div`
	width: 500px;
`

const AmbulatoryCardAddPage: React.FC<Props> = (props) => {
	const history = useHistory()
	const { id } = useParams<{ id: string }>()
	const { data, loaded } = useQuery(findOneAmbulatoryCard, { params: { id } })

	const handleSumbit = async (values: AmbulatoryCardInputT) => {
		await updateAmbulatoryCard(values)

		history.push('/ambulatory-card')
	}

	const handleSaveClick = () => console.log('Save clicked')

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
					<Form
						onSubmit={handleSumbit}
						initialData={data}
						loaded={loaded}
					/>
				</FormLayout>
			</FormContainer>
		</Layout>
	)
}

export default AmbulatoryCardAddPage
