const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
   'Telega_Bot',
   'root',
   'root',
   {
      host: '185.192.108.52',
      port: '6432',
      dialect: 'postgres',
   }
);