import React, { PropsWithChildren } from 'react'
import Form, { Field } from 'core/form'
import Button from 'core/button'
import Row from 'core/row'
import Col from 'core/column'

type Props = PropsWithChildren<{}>

const AmbulatoryCardAddPage: React.FC<Props> = (props) => {
	return (
		<Form>
			<Row>
				<Col xs={6}>
					<Field
						name='name'
						label='имя'
					/>
				</Col>
				<Col xs={6}>
					<Field
						name='surname'
						label='фамилия'
					/>
				</Col>
			</Row>
			<Row>
				<Button
					type='submit'
				>
					Send
				</Button>
			</Row>
		</Form>
	)
}

export default AmbulatoryCardAddPage
