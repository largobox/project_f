import React, { PropsWithChildren } from 'react'
import { useHistory } from 'react-router-dom'
import { AmbulatoryCardT } from 'type'
import styled from 'styled-components'
import { EditIcon, RemoveIcon } from 'icons'
import { Row, Column as Col, Button, ButtonGroup } from 'core'
import { deleteAmbulatoryCard } from 'api/ambulatory_card'
import { useRefreshAmbulatoryCardGrid } from 'module/ambulatory_card'

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
	const { data: { id, firstName } } = props
	const history = useHistory()
	const refreshAmbulatoryCardGrid = useRefreshAmbulatoryCardGrid()

	const handleEditClick = (id: string) => () => {
		history.push(`/ambulatory-card/${id}/edit`)
	}

	const handleRemoveClick = (id: string) => async () => {
		await deleteAmbulatoryCard(id)

		refreshAmbulatoryCardGrid()
	}

	return (
		<Container>
			<Row>
				<Col xs={6}>
					<span>{firstName}</span>
				</Col>

				<Col xs={6}>
					<ControlsContainer>
						<ButtonGroup>
							<Button color='secondary' onClick={handleEditClick(id)}>
								<EditIcon />
							</Button>
							<Button color='secondary' onClick={handleRemoveClick(id)}>
								<RemoveIcon />
							</Button>
						</ButtonGroup>
					</ControlsContainer>
				</Col>
			</Row>
		</Container>
	)
}

export default AmbulatoryCardItem
