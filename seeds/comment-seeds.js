const { Comment } = require('../models');

const commentdata = [
    {
     comment_text: 'An apple a day, means medical and staff equipment cutbacks, TRY a burger!',
     user_id: 1,
     post_id: 1   
    },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;