const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Vote } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', (req, res) => {
    res.render('create-post');
});

router.get('/topic', withAuth, (req, res) => {
            Post.findAll({
                limit: 1, 
                where: {
                    user_id: req.session.user_id
                },
                attributes: [
                    'id',
                    'description',
                    'pet_name',
                    'created_at', [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
                ],
                order: [['created_at', 'DESC']],
                include: [{
                        model: Comment,
                        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                        include: {
                            model: User,
                            attributes: ['username']
                        }
                    },
                    {
                        model: User,
                        attributes: ['username']
                    }
                ]
            })
            .then(dbPostData => {
                const post = dbPostData.map(post => post.get({ plain: true }));
                res.render('add-topic', { post, loggedIn: true });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            }); 
});

module.exports = router;