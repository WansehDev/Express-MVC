/*
*   This is a Model class for the users.  
*   @Author: Lance Parantar
*/

const connectDB = require("../config");
class UserModel {
    constructor() {
        this.db = connectDB;
    }

    createUser(first_name, last_name, email, password) {
        return new Promise((resolve, reject) => {
            this.db.query(
                `INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?);`,
                [first_name, last_name, email, password],
                (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                }
            );
        });
    }
    
    getUser(email) {
        return new Promise((resolve, reject) => {
            this.db.query(
                `SELECT * FROM users WHERE email = ?;`,
                [email],
                (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                }
            );
        });
    }

  
}

module.exports = new UserModel();