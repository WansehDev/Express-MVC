/*
 *   This is a Model class for the users.
 *   @Author: Lance Parantar
 */
const EXPRESS_MODEL = require("../system/express_model");
class StudentModel extends EXPRESS_MODEL {
  async createUser(first_name, last_name, email, password) {
    return await this.runQuery(
      "INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?);",
      [first_name, last_name, email, password]
    )
      .then((result) => {
        console.log("User created", result);
      })
      .catch((err) => {
        console.log("error creating user", err);
        return err;
      });
  }

  async getUser(email) {
    return await this.runQuery("SELECT * FROM users WHERE email = ?;", [email])
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log("error getting user", err);
      });
  }
}

module.exports = new StudentModel();
