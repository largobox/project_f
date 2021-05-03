import React, { Suspense } from 'react'
import styled from 'styled-components'
import Menu from 'common/navigation'
import { Route, Switch, Redirect } from 'react-router-dom'
import AmbulatoryCardPages from 'page/ambulatory_card'
import ServicePages from 'page/service'
import Preloader from 'core/preloader'

const Container = styled.div`
	display: grid;
	grid-template-columns: 200px 1fr;
`

const Content = styled.div`
	background-color: ${({ theme }) => theme.palette.primary.light};
	padding-left: ${({theme}) => theme.spacing(4)};
	padding-right: ${({theme}) => theme.spacing(4)};
`

function App() {
	return (
		<Container>
			<Menu />

			<Content>
				<Suspense fallback={<Preloader />}>
					<Switch>
						<Route path='/ambulatory-card'>
							<AmbulatoryCardPages />
						</Route>
						<Route path='/service'>
							<ServicePages />
						</Route>
						<Route exact path='/'>
							<Redirect to='/ambulatory-card' />
						</Route>
					</Switch>
				</Suspense>
			</Content>
		</Container>
	)
}

export default App
