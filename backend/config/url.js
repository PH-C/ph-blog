const index = require('../routes/index');
const users = require('../routes/users');
const city = require('../routes/city');

module.exports = (app) => {
  console.log('init URL');
  app.use('/api/users', users);
  app.use('/api/city', city);
  app.use(index);

  console.log('init URL end');
};
