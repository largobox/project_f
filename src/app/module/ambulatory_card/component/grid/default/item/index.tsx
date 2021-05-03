import React, { PropsWithChildren } from 'react'
import { useHistory } from 'react-router-dom'
import { AmbulatoryCardT } from 'type'
import styled from 'styled-components'
import { EditIcon, RemoveIcon } from 'icons'
import { Row, Column, Button, ButtonGroup } from 'core'

const Container = styled.div`
	padding: ${({ theme }) => theme.spacing(1)};
	margin-bottom: ${({ theme }) => theme.spacing(1)};
	background-color: ${({ theme }) => theme.palette.paper};
	transition: ${({ theme }) => theme.transition.default};
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.palette.default.light};
	}
`

const ControlsContainer = styled.div`
	display: flex;
	flex-direction: row-reverse;
`

type Props = PropsWithChildren<{ data: AmbulatoryCardT }>

const AmbulatoryCardItem: React.FC<Props> = (props) => {
	const { data } = props
	const history = useHistory()

	const handleEditClick = (id: string) => () => {
		history.push(`/ambulatory-card/${id}/edit`)
	}

	const handleRemoveClick = () => {
		alert('Remove clicked')
	}

	return (
		<Container>
			<Row>
				<Column xs={6}>
					<span>{data.firstName}</span>
				</Column>

				<Column xs={6}>
					<ControlsContainer>
						<ButtonGroup>
							<Button color='secondary' onClick={handleEditClick(data.id)}>
								<EditIcon />
							</Button>
							<Button color='secondary' onClick={handleRemoveClick}>
								<RemoveIcon />
							</Button>
						</ButtonGroup>
					</ControlsContainer>
				</Column>
			</Row>
		</Container>
	)
}

export default AmbulatoryCardItem
