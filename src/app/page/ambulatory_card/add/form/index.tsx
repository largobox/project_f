import React, { PropsWithChildren } from 'react'
import * as yup from 'yup'
import { Form, Button, Row, Field, Column as Col, Input } from 'core'

type PropsT = PropsWithChildren<{}>

const schema = yup.object().shape({
	name: yup.string().required(),
	surname: yup.string().required(),
	age: yup.string().required(),
})

const AmbulatoryCardAddPage: React.FC<PropsT> = (props) => {
	const handleSumbit = (data: any) => {
		console.log('SUBMIT FORM DATA: ', data)
	}

	return (
		<Form
			onSubmit={handleSumbit}
			initialValues={{
				name: 'Maow',
				surname: '',
				age: '',
			}}
			schema={schema}
		>
			<Row>
				<Col xs={12}>
					<Field name='name' label='имя' />
				</Col>
			</Row>
			<Row>
				<Col xs={8}>
					<Field
						name='surname'
						placeholder='Введите фамилию'
						label='фамилия'
					/>
				</Col>
			</Row>
			<Row>
				<Col xs={6}>
					<Field name='age' label='возраст' />
				</Col>
				<Col xs={6}>
					<Field name='createdAt' label='дата создания' />
				</Col>
			</Row>
			<Row>
				<Button type='submit'>Send</Button>
			</Row>
		</Form>
	)
}

export default AmbulatoryCardAddPage
