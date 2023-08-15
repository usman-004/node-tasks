const Sequelize = require("sequelize");

const sequelize = new Sequelize("learningNode", "root", "password", {
  dialect: "mysql",
  host: "localhost",
});
console.log("database connected successfully...");
module.exports = sequelize;
