import PromiseDB from './connection'
import { GenderT } from 'type'

export const findGender = () => {
	return new Promise<GenderT[]>(async (resolve, reject) => {
		const db = await PromiseDB
		const transaction = db.transaction('genders')
		const genders = transaction.objectStore('genders')
		const request = genders.getAll()

		request.onsuccess = () => resolve(request.result)
		request.onerror = () => reject(null)
	})
}
