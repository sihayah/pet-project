const router = require('express').Router();
const { Comment, Post } = require('../../models');
const withAuth = require('../../utils/auth');
//const Email = require('email-templates');
const nodemailer = require("nodemailer");


/*const email = new Email ({
  message: {
    from: 'kohn.max@gmail.com'
  },
  send: true,
  transport: {
    jsonTransport: true
  }
});*/

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
      console.log(dbCommentData.dataValues.post_id);
      /*//figure out how to get post user email address and username
      router.get('/:id', (req, res) => {
        Post.findOne({
          where: {
            id: dbCommentData.dataValues.post_id
          },
          attributes: ['id'],
          include: [
            {
              model: User,
              attributes: ['username', 'email']
            }
          ]
        })
          .then(dbPostData => {
            if (!dbPostData) {
              res.status(404).json({ message: 'No post found with this id' });
              return;
            }
            console.log(dbPostData);
            res.json(dbPostData);
          })
          .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
      });*/
      async function sendEmail() {
        // Generate test SMTP service account from ethereal.email
      
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
          to: req.session.email, // currently commenters email address
          subject: `Max has just received a comment on a post`, // Subject line
          html: `<p>Hi ${req.session.username},<p><br><p>You've just receieved a comment on <a href="https://agile-hamlet-39263.herokuapp.com/post/${req.body.post_id}">this</a> post</p>` // html text body
        });

      }

      sendEmail().catch(console.error);



      /*email.send({
        template: 'comment-notification',
        message: {
          to: req.session.email
        },
        locals: {
          name: req.session.username,
          posturl: `https://agile-hamlet-39263.herokuapp.com/post/${req.body.post_id}`
        }
      })
      .then(console.log('email sent'))
      .catch(e => {
        console.log(e);
      });*/
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
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