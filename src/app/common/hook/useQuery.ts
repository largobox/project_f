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
	}, [])

	return { data: queryState.data, loaded: queryState.loaded }
}

export default useQuery
