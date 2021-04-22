if (!window.indexedDB) {
	console.error(
		'Ваш браузер не поддерживает стабильную версию IndexedDB. Оффлайн режим будет недоступен'
	)
}

let db

const DBOpenRequest = window.indexedDB.open('registry', 1)

DBOpenRequest.onerror = function (ev, ...rest) {
	console.error('Сonnection to database: Failed', ev.target.error)
}

DBOpenRequest.onsuccess = function (ev) {
	console.log('Сonnection to database: Success')

	let db = DBOpenRequest.result
	// db = ev.target.result;

	db.onerror = function (ev) {
		console.error(`Database error code: ${ev.target.errorCode}`)
	}

	console.log('db: ', db)
}

DBOpenRequest.onupgradeneeded = function (event) {
	const db = event.target.result

	console.log(`Database upgradeneeded`)

	const objectStore = db.createObjectStore('store1', { keyPath: 'myKey' })
}

export default DBOpenRequest
