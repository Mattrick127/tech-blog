const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'Mattrick127',
        email: 'gorillamurdoc@yahoo.com',
        password: 'Slipknot0134'
    },
    {
        username: 'LeslieDang',
        email: 'iseeyou359@yahoo.com',
        password: 'Bandit777!'
    },
    {
        username: 'LameoMcBam-o',
        email: 'freshchickennuggets@gmail.com',
        password: 'Alabama1'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;