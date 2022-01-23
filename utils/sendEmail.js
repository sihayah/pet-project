//import nodemailer from 'nodemailer';

 async function sendEmail(username, email) {
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
      to: email, // currently commenters email address
      subject: `You've just received a comment on a post`, // Subject line
      html: `<p>Hi ${username},<p><br><p>You've just receieved a comment on <a href="https://agile-hamlet-39263.herokuapp.com/post/${req.body.post_id}">this</a> post</p>` // html text body
    });

  }

//sendEmail().catch(console.error);

module.exports = sendEmail;