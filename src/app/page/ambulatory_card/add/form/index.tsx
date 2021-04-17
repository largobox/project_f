import React, { PropsWithChildren } from 'react'
import * as yup from 'yup'
import { Form, Button, Row, Field, Column as Col, Input } from 'core'

type PropsT = PropsWithChildren<{}>

const schema = yup.object().shape({
	name: yup.string().required(),
	surname: yup.string().required()
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
				surname: ''
			}}
			schema={schema}
		>
			<Row>
				<Col xs={12}>
					<Field
						label='имя'
					>
						<Input
							placeholder='введите имя'
							name='name'
						/>
					</Field>
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<Field
						label='фамилия'
					>
						<Input
							placeholder='введите фамилию'
							name='surname'
						/>
					</Field>
				</Col>
			</Row>
			<Row>
				<Button type='submit'>Send</Button>
			</Row>
		</Form>
	)
}

export default AmbulatoryCardAddPage
