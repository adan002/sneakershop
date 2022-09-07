const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://flfiiccgewqjfc:7af7a4e2b6775d340098429d1cc1fd0bd8ad08983d926fae7530efdd6e2a8687@ec2-54-161-255-125.compute-1.amazonaws.com:5432/d694l6necjri3k",
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

module.exports = sequelize;
