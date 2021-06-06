import PromiseDB from './connection'
import { IndexDBError } from 'error'
import { AmbulatoryCardT, AmbulatoryCardInputT } from 'type'

export const createAmbulatoryCard = (data: AmbulatoryCardInputT) => {
	return new Promise(async (resolve, reject) => {
		const db = await PromiseDB
		const transaction = db.transaction('ambulatoryCards', 'readwrite')
		const ambulatoryCards = transaction.objectStore('ambulatoryCards')
		const request = ambulatoryCards.add(data)

		request.onsuccess = () => resolve(request.result)
		request.onerror = () => reject(null)
	})
}

export const updateAmbulatoryCard = (data: AmbulatoryCardInputT) => {
	return new Promise(async (resolve, reject) => {
		const db = await PromiseDB
		const transaction = db.transaction('ambulatoryCards', 'readwrite')
		const ambulatoryCards = transaction.objectStore('ambulatoryCards')
		const request = ambulatoryCards.put(data)

		request.onsuccess = () => resolve(request.result)
		request.onerror = () => reject(null)
	})
}

export const findAmbulatoryCard = (params: any) => {
	const { page, perPage } = params
	const offset = perPage * (page - 1)

	return new Promise<{}>(async (resolve, reject) => {
		const db = await PromiseDB
		const transaction = db.transaction('ambulatoryCards')
		const ambulatoryCards = transaction.objectStore('ambulatoryCards')

		const requestCount = ambulatoryCards.count()

		const promiseGetCount = new Promise((resolve, reject) => {
			requestCount.onsuccess = () => resolve(requestCount.result)
			requestCount.onerror = () => reject(null)
		})

		const count = Number(await promiseGetCount)

		const requestData = ambulatoryCards.openCursor()

		let index = 0
		let data: AmbulatoryCardT[] = []
		const lastPageIndex = page * perPage
		let maxSize = perPage

		if (lastPageIndex > count) {
			maxSize = count % perPage
		}

		requestData.onsuccess = () => {
			index++
		  let cursor = requestData.result;

		  if (!cursor) return []

			if (index === 1 && offset !== 0) {
				cursor.advance(offset)
			} else {
				data.push(cursor.value)

				if (data.length === maxSize) {
					resolve({
						data,
						count
					})
				} else {
					cursor.continue();
				}
			}
		}

		requestData.onerror = () => reject(null)
	})
}

export const findOneAmbulatoryCard = (params: any) => {
	return new Promise<{}>(async (resolve, reject) => {
		try {
			const db = await PromiseDB
			const transaction = db.transaction('ambulatoryCards')
			const ambulatoryCards = transaction.objectStore('ambulatoryCards')
			const request = ambulatoryCards.get(Number(params.id))

			request.onsuccess = () => resolve({ data: request.result })
			request.onerror = (ev) => reject(ev)
		} catch (err) {
			handleError('findOneAmbulatoryCard', err)
		}
	})
}

export const deleteAmbulatoryCard = (id: string) => {
	return new Promise<AmbulatoryCardT[]>(async (resolve, reject) => {
		const db = await PromiseDB
		const transaction = db.transaction('ambulatoryCards', 'readwrite')
		const ambulatoryCards = transaction.objectStore('ambulatoryCards')
		const request = ambulatoryCards.delete(Number(id))

		request.onsuccess = () => resolve(request.result)
		request.onerror = () => reject(null)
	})
}

function handleError(methodName: string, err: Error) {
	const error = new IndexDBError('findOneAmbulatoryCard', err)

	console.error(error)
}
