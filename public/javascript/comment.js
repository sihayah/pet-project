
async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    const postURL = window.location.toString().split('/');
    const post_id = postURL[postURL.length - 1];

    console.log(comment_text, post_id, post_id);

  
    if (comment_text) {
      console.log('hello');
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          post_id,
          comment_text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      


      if (response.ok) {
        //send post id to route for getting user info from post and sending email
        fetch(`/api/comments/email`, {
          method: 'POST',
          body: JSON.stringify({
            post_id
        }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        document.location.reload();
      } else {
        alert(response.statusText);
      }

    }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);