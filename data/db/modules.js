//var mongoose = require('mongoose');

const CitySchema = require('./modules/city');
const DB_URL = require('./db');

module.exports = (mongoose) => {

  /* 连接 */
  mongoose.connect(DB_URL, {
      useMongoClient: true
  });

  /* 连接成功 */
  mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + DB_URL);
  });

  /* 连接异常 */
  mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
  });

  /* 连接断开 */
  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
  });
  // mongoose.model('apply_policy', ApplyPolicySchema(mongoose));

  mongoose.model('city', CitySchema(mongoose));
}
