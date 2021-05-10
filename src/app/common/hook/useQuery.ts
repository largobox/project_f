import React, { useState, useEffect } from 'react'

type QueryApiFunc = (args: any) => Promise<any>

type QueryOptions = {
	params?: object
}

function useQuery(apiFunc: QueryApiFunc, options: QueryOptions = {}) {
	const { params } = options
	const [queryState, setQueryState] = useState({
		data: null,
		loaded: false,
	})

	useEffect(() => {
		if (queryState.loaded) return

		;(async () => {
			try {
				const result = await apiFunc.call(null, params)

				setQueryState({
					data: result,
					loaded: true,
				})
			} catch (err) {
				console.error(err)
			}
		})()
	}, [queryState.loaded])

	const refresh = () => {
		setQueryState({
			data: null,
			loaded: false
		})
	}

	return {
		data: queryState.data,
		loaded: queryState.loaded,
		refresh,
	}
}

export default useQuery
