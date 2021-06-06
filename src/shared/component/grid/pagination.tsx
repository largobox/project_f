import React from 'react'
import styled from 'styled-components'

import { Button } from 'core'
import { EditIcon, RemoveIcon, ChevronLeftIcon, ChevronRightIcon } from 'icon'

const Container = styled.div`
	display: flex;

	${Button} {
		margin: 0px ${({ theme }) => theme.spacing(0.5)};

		:first-child {
			margin-left: 0px;
		}

		:last-child {
			margin-right: 0px;
		}
	}
`

type Props = {
	page: number
	perPage: number
	count: number
	onChange: (value: number) => void
}

const Pagination: React.FC<Props> = (props) => {
	const { page, perPage, count, onChange } = props
	const pageCount = Math.ceil(count / perPage)
	const pageNumberRange =  []

	for (let i = 1; i <= pageCount; i++) {
		pageNumberRange.push(i)
	}

	const handleToLeftClick = () => {}
	const handleToRightClick = () => {}
	const handlePageClick = (page: number) => () => {
		onChange(page)
	}

	return (
		<Container>
			<Button key='left'>
				<ChevronLeftIcon />
			</Button>
			{pageNumberRange.map((pageNumber) => {
				const isSelected = page === pageNumber

				return (
					<Button
						key={pageNumber}
						onClick={handlePageClick(pageNumber)}
						isSelected={isSelected}
					>
						{pageNumber}
					</Button>
				)
			})}
			<Button key='right'>
				<ChevronRightIcon />
			</Button>
		</Container>
	)
}

export default Pagination
