const path = require('path');

module.exports = function (app) {
	app.use('/api/v1/auth', require('../controllers/auth.controller'));
  app.use('/api/v1/user', require('../controllers/user.controller'));
  app.use('/api/v1/article', require('../controllers/article.controller'));
  app.use('/api/v1/location', require('../controllers/location.controller'));
  app.use('/api/v1/group', require('../controllers/group.controller'));
  app.all('*', function (req, res, next) {
    res.sendFile(path.resolve('public/index.html'));
	});
};
