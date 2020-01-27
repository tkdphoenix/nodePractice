const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-complete', 'root', 'P@$$W0rd', {
  dialect: 'mysql', 
  host: 'localhost',
})

module.exports = sequelize