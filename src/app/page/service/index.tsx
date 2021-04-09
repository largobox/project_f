import React from 'react'
import ServiceList from 'page/service/list'
import { Route, Switch } from 'react-router-dom'

function ServicePages() {
	return (
		<Switch>
			<Route path='/service' exact>
				<ServiceList />
			</Route>
		</Switch>
	)
}

export default ServicePages
