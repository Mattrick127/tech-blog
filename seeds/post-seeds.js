const { Post } = require('../models');

const postdata = [
    {
    title: 'Slazzy Blaze.',
    post_url: 'https://chickens.com/super/important/crazystuff.html',
    user_id: 1
    }
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;