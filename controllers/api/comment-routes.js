const router = require('express').Router();
const { Comment, Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

const nodemailer = require("nodemailer");


router.get('/', (req, res) => {
  Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/', withAuth, (req, res) => {
  // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
   Comment.create({
    comment_text: req.body.comment_text,
    user_id: req.session.user_id,
    post_id: req.body.post_id
  })
    .then(dbCommentData => {
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

//router for email send
router.post('/email', withAuth, (req,res) => {
  Post.findOne({
    where: {
      id: req.body.post_id
    },
    attributes: ['id'],
    include: [
      {
        model: User,
        attributes: ['username', 'email'],
        //use raw:true in order to send sequelize data back as an object
          raw: true
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      console.log('user data call' + JSON.stringify(dbPostData));
      let userData = JSON.stringify(dbPostData);
      userData = JSON.parse(userData);

      console.log(userData.user.username);
      console.log(userData.user.email);

      const userEmail = userData.user.email;
      const userName = userData.user.username;


      async function sendEmail(userEmail, userName) {
        const transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          auth: {
              user: 'maybelle.howell90@ethereal.email',
              pass: 'wqK5HrumAzPfGSnnG7'
          }
      });
      
        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: '"Comment Ghost 👻"', // sender address
          to: userEmail, // currently commenters email address
          subject: `You've just received a comment on a post`, // Subject line
          html: `<p>Hi ${userName},<p><br><p>You've just receieved a comment on <a href="https://agile-hamlet-39263.herokuapp.com/post/${req.body.post_id}">this</a> post</p>` // html text body
        });
      }
      //send email based on post owner username and email
      sendEmail(userEmail, userName);


      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;