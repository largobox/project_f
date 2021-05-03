import PromiseDB from './connection'
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

export const findAmbulatoryCard = () => {
	return new Promise<AmbulatoryCardT[]>(async (resolve, reject) => {
		const db = await PromiseDB
		const transaction = db.transaction('ambulatoryCards')
		const ambulatoryCards = transaction.objectStore('ambulatoryCards')
		const request = ambulatoryCards.getAll()

		request.onsuccess = () => resolve(request.result)
		request.onerror = () => reject(null)
	})
}

export const findOneAmbulatoryCard = (id: string) => {
	return new Promise<AmbulatoryCardT[]>(async (resolve, reject) => {
		const db = await PromiseDB
		const transaction = db.transaction('ambulatoryCards')
		const ambulatoryCards = transaction.objectStore('ambulatoryCards')
		const request = ambulatoryCards.get(Number(id))

		request.onsuccess = () => resolve(request.result)
		request.onerror = () => reject(null)
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