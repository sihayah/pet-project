const router = require('express').Router();
const { Comment, Post, User, CareTopics } = require('../../models');
const withAuth = require('../../utils/auth');

// const nodemailer = require("nodemailer");


router.get('/', (req, res) => {
  CareTopics.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/',(req, res) => {
  // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
   CareTopics.create({
    title: req.body.title,
    description: req.body.description,
    post_id: req.body.post_id
  })
    .then(dbTopicData => {
      res.json(dbTopicData);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  CareTopics.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbTopicData => {
      if (!dbTopicData) {
        res.status(404).json({ message: 'No topic found with this id!' });
        return;
      }
      res.json(dbTopicData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;