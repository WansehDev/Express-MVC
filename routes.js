const Express = require('express');
const Router = Express.Router();
const UserController = require('./controllers/UserController');

Router.get('/', UserController.index);
Router.get('/register', UserController.viewRegisterPage);
Router.get('/logoff', UserController.logoff);

Router.post('/processRegister', UserController.processRegister)
;
Router.post('/processLogin', UserController.processLogin);


module.exports = Router;