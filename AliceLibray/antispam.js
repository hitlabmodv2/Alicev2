//————————————————————————//

/*

Base XyrooRynzz
Powered By Alice Assistent
© XyrooRynzz 2022 - 2026

Source
WhatsApp : https://wa.me/6281543496975
Tele me : https://t.me/XyrooRynzz
instagram : https://instagram.com/biionlyyone
WhatsApp: https://whatsapp.com/channel/0029VaagYHwCnA82hDK7l31D

*/

//————————————————————————//
const toMs = require('ms')

const usedCommandRecently = new Set()

const isFiltered = (from) => {
	return !!usedCommandRecently.has(from)
};

const addFilter = (from) => {
	usedCommandRecently.add(from)
	setTimeout(() => {
		return usedCommandRecently.delete(from)
	}, 3000)
};

const addSpam = (sender, _db) => {
	let position = false
	Object.keys(_db).forEach((i) => {
		if (_db[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_db[position].spam += 1
	} else {
		const bulin = ({
			id: sender,
			spam: 1,
			expired: Date.now() + toMs('10m')
				})
		_db.push(bulin)
	}
};

const ResetSpam = (_dir) => {
	setInterval(() => {
		let position = null
		Object.keys(_dir).forEach((i) => {
			if (Date.now() >= _dir[i].expired) {
				position = i
			}
		})
		if (position !== null) {
			console.log(`Spam expired: ${_dir[position].id}`)
			_dir.splice(position, 1)
		}
	}, 1000)
};

const isSpam = (sender, _db) => {
	let found = false
	for (let i of _db) {
		if (i.id === sender) {
			let spam = i.spam
			if (spam >= 6) {
				found = true
				return true
			} else {
				found = true
				return false
			}
		}
	}
};

module.exports = {
	isFiltered,
	addFilter,
	addSpam,
	ResetSpam,
	isSpam
};