const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'Mattrick127',
        email: 'gorillamurdoc@yahoo.com',
        password: 'Slipknot0134'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;