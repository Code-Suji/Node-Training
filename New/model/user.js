const mysql = require('mysql2');
const connectionStr = require('../config/dbConfig');

const bcrypt = require('bcrypt')
let UserModel = {};

UserModel.getAll = () => {
	// connection code to db
	return UserModel;
};

UserModel.saveNewUser = (userData) => {
	return new Promise(async (resolve, reject) => {

		//hash user passwords

		const salt = 10
		const password = await bcrypt.hash(userData.password,salt)
		console.log(`Hashed password : ${password}`)
		// connection code to db
		const connection = mysql.createConnection(connectionStr);
		console.log(connectionStr);
		const queryStr = `INSERT INTO node.user (username,email,password,status) VALUES ('${userData.name}', '${userData.email}', '${password}','1');`;
		connection.query(queryStr, function (err, results, fields) {
			// console.log(`error:${err}`)
			// console.log(`results:${results}`)
			// console.log(`fields:${fields}`)
			if (err) {
				console.log(err)
				reject(err);
			} else {
				resolve(results);
			}
		});
	});
};

UserModel.getUserByEmail = (userData) => {
	return new Promise((resolve, reject) => {
		// connection code to db
    const connection = mysql.createConnection(connectionStr);
    console.log(connectionStr);
    const queryStr = `SELECT * FROM node.user where email='${userData.email}';`;
		connection.query(queryStr, function (err, results, fields) {
			// console.log(`error:${err}`)
			console.log(`results:${results}`)
			// console.log(`fields:${fields}`)
			if (err) {
				reject(err);
			} else {
				resolve(results);
			}
		});
		
	});
};

module.exports = UserModel;
