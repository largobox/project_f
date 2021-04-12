import React, { PropsWithChildren, ReactElement, ReactChild } from 'react'
import FieldDeclaration from './field'
import Field from 'core/field'
import { UnhandledVariantError } from 'error'

type PropsT = {
	children: ReactElement | ReactElement[]
}

function handleChild(child: ReactElement): any {
	if (child === undefined) return null
	if (child === null) return null

	if (typeof child === 'number' || typeof child === 'string') {
		return child
	}

	if (Array.isArray(child)) {
		return React.Children.map(child, (item) => handleChild(item))
	}

	const children = child.props.children

	if (typeof child === 'object' && children && typeof children === 'number' || typeof children === 'string') {
		return React.cloneElement(child, child.props, children)
	}

	if (typeof child === 'object' && children && typeof children === 'object') {
		return React.cloneElement(child, child.props, handleChild(children))
	}

	if (typeof child === 'object' && children && Array.isArray(children)) {
		return React.Children.map(children, (item) => handleChild(item))
	}

	if (typeof child === 'object' && child.type === FieldDeclaration) {
		return (
			<Field
				name={child.props.name}
				label={child.props.label}
				type={child.props.type}
			/>
		)
	}

	throw new UnhandledVariantError('Form', 'handleChild', child)
}

const Form = (props: PropsT) => {
	const { children } = props

	return (
		<form>
			{React.Children.map(children, (child) => handleChild(child))}
		</form>
	)
}

export { default as Field } from './field'
export default Form
