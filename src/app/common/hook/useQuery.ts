import React, { useState, useEffect } from 'react'
import { UseQueryApiFuncT } from 'type'

type QueryOptions = {
	params?: object
}
 
function useQuery(apiFunc: UseQueryApiFuncT, options: QueryOptions = {}) {
	const { params } = options

	const [queryState, setQueryState] = useState({
		response: null,
		loaded: false,
		params
	})


	useEffect(() => {
		if (queryState.loaded) return

		;(async () => {
			try {
				const response = await apiFunc.call(null, queryState.params)

				setQueryState({
					response,
					loaded: true,
					params: queryState.params
				})
			} catch (err) {
				console.error(err)
			}
		})()
	}, [queryState.loaded])

	const refresh = (params = {}) => {
		setQueryState({
			response: null,
			loaded: false,
			params
		})
	}

	return {
		response: queryState.response,
		loaded: queryState.loaded,
		refresh,
	}
}

export default useQuery
