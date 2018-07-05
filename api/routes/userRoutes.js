import authenticate from '../middlewares/authenticate';
import user from '../controllers/UserController';

module.exports = function (app) {

    app.route('/users')
        .post(user.register_user);

    app.route(authenticate, '/users/:colorId')
        .get(user.current_user);
};