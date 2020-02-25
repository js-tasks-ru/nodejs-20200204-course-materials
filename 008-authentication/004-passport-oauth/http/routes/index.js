const Router = require('koa-router');
const {login, register, home, logout, oauth} = require('./../controllers/authentication');

const router = new Router({prefix: '/api'});

router.post('/login', login);
router.get('/home', home);
router.post('/register', register);
router.get('/logout', logout);

router.get('/oauth/:provider', oauth);
router.get('/oauth/:provider/callback', oauth);

module.exports = router;
