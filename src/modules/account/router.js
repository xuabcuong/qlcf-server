// Assuming you have a Sequelize instance set up
const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

// Test the connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Define your Account model
const Account = sequelize.define('account', {
    AccountID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = Account;
