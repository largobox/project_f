import React, { PropsWithChildren } from 'react'
import * as yup from 'yup'
import {
	Form,
	Button,
	Row,
	Field,
	Column as Col,
	Input,
	Select,
	Typography,
} from 'core'
import { useHistory } from 'react-router-dom'
import { AmbulatoryCardInputT } from 'type'
import GenderSelect from 'common/select/gender_select'

type PropsT = PropsWithChildren<{
	initialData: object
	loaded?: boolean
	onSubmit: (data: AmbulatoryCardInputT) => Promise<void>
}>

const schema = yup.object().shape({
	firstName: yup.string().required(),
})

const AmbulatoryCardAddPage: React.FC<PropsT> = (props) => {
	const { initialData, onSubmit, loaded } = props
	const history = useHistory()

	return (
		<Form onSubmit={onSubmit} initialValues={initialData} schema={schema} loaded={loaded}>
			<Row>
				<Col xs={12}>
					<Field label='имя' name='firstName'>
						<Input placeholder='введите имя' />
					</Field>
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<Field label='фамилия' name='surname'>
						<Input placeholder='введите фамилию' />
					</Field>
				</Col>
			</Row>
			<Row>
				<Col xs={6}>
					<Field label='пол' name='gender'>
						<GenderSelect />
					</Field>
				</Col>
			</Row>
			<Row>
				<Button type='submit'>
					<Typography>Отправить</Typography>
				</Button>
			</Row>
		</Form>
	)
}

export default AmbulatoryCardAddPage
