if (!window.indexedDB) {
	console.error(
		'Ваш браузер не поддерживает стабильную версию IndexedDB. Оффлайн режим будет недоступен'
	)
}

const promiseEstablishConnection = new Promise<IDBDatabase>((resolve, reject) => {
	const DBOpenRequest = window.indexedDB.open('registry', 1)

	DBOpenRequest.onsuccess = function (ev: any) {
		console.log('Сonnection to database: Success')

		let db: IDBDatabase = DBOpenRequest.result

		db.onerror = function (ev: any) {
			console.error(
				`Database error code: ${ev.target.errorCode}. Error: `,
				ev.target.error
			)
		}

		db.onversionchange = function () {
			db.close()
			alert('База данных устарела, пожалуста, перезагрузите страницу.')
		}

		resolve(DBOpenRequest.result)
	}

	DBOpenRequest.onerror = function (ev: any) {
		console.error('Сonnection to database: Failed', ev.target.error)

		reject(null)
	}

	DBOpenRequest.onupgradeneeded = function (ev: any) {
		const db = ev.target.result

		console.log(`Database upgradeneeded`)

		initializeObjectStores(db)
	}
})

function initializeObjectStores(db: IDBDatabase) {
	db.createObjectStore('ambulatoryCards', {
		keyPath: 'id',
		autoIncrement: true,
	})
}

export default promiseEstablishConnection
