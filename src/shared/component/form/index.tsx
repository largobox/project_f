import React, { PropsWithChildren } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import styled from 'styled-components';
import { AnyObjectSchema } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type PropsT = PropsWithChildren<{
	onSubmit: (data: any) => void
	initialValues: any
	loaded: boolean
	schema?: AnyObjectSchema
	className?: string
}>

const Container = styled.form``;

const Form = (props: PropsT) => {
	const {
		className,
		children,
		onSubmit,
		initialValues,
		schema,
		loaded = true
	} = props

	if (!loaded) return null

	const methods = useForm({
		defaultValues: initialValues,
		resolver: yupResolver(schema)
	})

	return (
		<FormProvider {...methods}>
			<Container
				className={className}
				onSubmit={methods.handleSubmit(onSubmit)}
			>
				{children}
			</Container>
		</FormProvider>
	)
}

export default styled(Form)``
