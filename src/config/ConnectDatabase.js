const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('qlcf_db', 'root', '123456', {
    host: 'localhost',
    port: 3307,
    dialect: 'mysql',
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection();

module.exports = sequelize;
