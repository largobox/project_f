import React from 'react'
import ServiceListPage from 'module/service/list'
import { Route, Switch } from 'react-router-dom'

function ServiceModule() {
	return (
		<Switch>
			<Route path='/service' exact>
				<ServiceListPage />
			</Route>
		</Switch>
	)
}

export default ServiceModule
