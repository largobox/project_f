// entity
export type AmbulatoryCardT = {
	id: string
	firstName: string
}

export type AmbulatoryCardInputT = {
	firstName: string
}

export type GenderT = {
	value: string
	label: string
}

// hook

export type UseQueryApiFuncT = (args: any) => Promise<any>

export type UseQueryParamsT = {
	page?: number
	perPage?: number
}
