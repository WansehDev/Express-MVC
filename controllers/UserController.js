/*
 *   This is a controller class for the users.
 *   @Author: Lance Parantar
 */
const User = require("../models/UserModel");
class UserController {
  /* Render Index */
  index(req, res) {
    res.render("index.ejs");
  }

  /* Render Register */
  viewRegisterPage(req, res) {
    res.render("register.ejs");
  }

  /* Render Login */
  viewLoginPage(req, res) {
    res.render("login.ejs");
  }

  /* process logout */
  logoff(req, res) {
    res.redirect("/");
  }

  /* process register */
  async processRegister(req, res) {
    console.log("Registering user...");
    await User.createUser(
      req.body.firstname,
      req.body.lastname,
      req.body.email,
      req.body.password
    )
      .then((result) => {
        console.log("User created successfully");
        res.redirect("/");
      })
      .catch((err) => {
        console.log("Error creating user");
        res.redirect("/register");
      });
  }

  /* process login */
  async processLogin(req, res) {
    console.log("Logging in user...");
    await User.getUser(req.body.email)
      .then((result) => {
        if (result.length > 0 && result[0].password === req.body.password) {
          //req.session.user = result[0];
          res.render("login.ejs", { name: result[0].firstname });
        } else {
          res.redirect("/");
        }
      })
      .catch((err) => {
        console.log("Error logging in user");
        res.redirect("/");
      });
  }
}

module.exports = new UserController();
