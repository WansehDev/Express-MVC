/*
 *   This is a controller class for the users.
 *   @Author: Lance Parantar
 */
const StudentModel = require("../models/StudentModel");
class UserController {
  /* Render Index */
  index(req, res) {
    res.render("index.ejs");
  }

  /* Render Register */
  viewRegisterPage(req, res) {
    res.render("register.ejs");
  }

  /* process logout */
  logoff(req, res) {
    res.redirect("/");
  }

  /* process register */
  processRegister(req, res) {
    console.log("Registering user...");
    StudentModel.createUser(
      req.body.firstname,
      req.body.lastname,
      req.body.email,
      req.body.password
    );
    res.redirect("/register");
  }

  /* process login */
  processLogin(req, res) {
    console.log("Logging in user...");
    StudentModel.getUser(req.body.email)
      .then((result) => {
        if (result.length > 0 && result[0].password == req.body.password) {
          res.render("login.ejs", { name: result[0].firstname });
        }
        res.redirect("/");
      })
  }
}

module.exports = new UserController();
