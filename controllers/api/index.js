const router = require('express').Router();

const userRouters = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes.js');

router.use('/users', userRouters);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;