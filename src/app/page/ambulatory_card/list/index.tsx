import React, { PropsWithChildren } from 'react'
import Layout from 'layout/default'
import AmbulatoryCardGrid from './grid'

type Props = PropsWithChildren<{}>

const AmbulatoryCardListPage: React.FC<Props> = (props) => {
	return (
		<Layout title='Регистратура'>
			<AmbulatoryCardGrid />
		</Layout>
	)
}

export default AmbulatoryCardListPage
