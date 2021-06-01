import React from 'react'
import { FaPen, FaTrash, FaChevronLeft, FaChevronRight  } from 'react-icons/fa'
import { IconType } from 'react-icons'

type IconPropsType = {
	size?: 'small' | 'middle'
}

function sizeAliasToNumber(alias: string) {
	if (alias === 'small') return 12
	if (alias === 'middle') return 16
}

const iconWrapper = (Icon: IconType) => (props: IconPropsType) => {
	const { size = 'middle' } = props

	const iconProps = {
		size: sizeAliasToNumber(size),
	}

	return <Icon {...iconProps} />
}

export const EditIcon = iconWrapper(FaPen)
export const RemoveIcon = iconWrapper(FaTrash)
export const ChevronLeftIcon = iconWrapper(FaChevronLeft)
export const ChevronRightIcon = iconWrapper(FaChevronRight)
