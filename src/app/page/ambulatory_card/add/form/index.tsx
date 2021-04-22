import React, { PropsWithChildren } from 'react'
import * as yup from 'yup'
import { Form, Button, Row, Field, Column as Col, Input, Select } from 'core'

type PropsT = PropsWithChildren<{}>

const schema = yup.object().shape({
	name: yup.string().required(),
	surname: yup.string().required(),
})

const AmbulatoryCardAddPage: React.FC<PropsT> = (props) => {
	const handleSumbit = (data: any) => {
		console.log('SUBMIT FORM DATA: ', data)
	}

	return (
		<Form
			onSubmit={handleSumbit}
			initialValues={{
				name: 'Some name',
				surname: '',
			}}
			schema={schema}
		>
			<Row>
				<Col xs={12}>
					<Field label='имя' name='name'>
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
						<Select
							placeholder='выберите пол'
							name='gender'
							options={[
								{ key: 'm', value: 'male' },
								{ key: 'f', value: 'female' },
								{ key: '1', value: 'very biiiiiiiig word 1' },
								{ key: '2', value: 'very biiiiiiiig word 2' },
								{ key: '3', value: 'very biiiiiiiig word 3' },
								{ key: '4', value: 'very biiiiiiiig word 4' },
								{ key: '5', value: 'very biiiiiiiig word 5' },
								{ key: '6', value: 'very biiiiiiiig word 6' },
								{ key: '7', value: 'very biiiiiiiig word 7' },
								{ key: '8', value: 'very biiiiiiiig word 8' },
								{ key: '9', value: 'very biiiiiiiig word 9' },
								{ key: '10', value: 'very biiiiiiiig word 10' },
							]}
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
