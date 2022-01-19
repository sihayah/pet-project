async function topicButtonHandler(event) {
    event.preventDefault();
<<<<<<< HEAD

    const title = document.querySelector('input[name="topic-title"]').value;
    const description = document.querySelector('input[name="topic-description"]').value;
    const post_id = document.querySelector('input[name="post-id"]').value;

    const response = await fetch(`/api/topics`, {
        method: 'POST',
        body: JSON.stringify({
          title,
          description,
          post_id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {
        document.location.replace(`/create/topic`);
      } else {
        alert(response.statusText);
      }
};

async function postSubmitHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="topic-title"]').value;
    const description = document.querySelector('input[name="topic-description"]').value;
    const post_id = document.querySelector('input[name="post-id"]').value;

    const response = await fetch(`/api/topics`, {
        method: 'POST',
        body: JSON.stringify({
          title,
          description,
          post_id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {
        document.location.replace(`/dashboard`);
      } else {
        alert(response.statusText);
      }
}

document.querySelector('button[type="button"]').addEventListener('click', topicButtonHandler);

document.querySelector('.topic-form').addEventListener('submit', postSubmitHandler);
=======
    const title = document.querySelector('input[name="post-title"]').value;
    const description = document.querySelector('input[name="post-url"]').value;
    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            description
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(response);
    if (response.ok) {
        document.location.replace('/post/:id');
    } else {
        alert(response.statusText);
    }
}
async function newFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('input[name="post-title"]').value;
    const description = document.querySelector('input[name="post-url"]').value;
    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            description
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(response);
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}
document.querySelector('.topic-form').addEventListener('button', topicButtonHandler);
document.querySelector('.topic-form').addEventListener('submit', newFormHandler);
>>>>>>> 0b82d9e68246e7f642e5f056c47d16d0790b7b5b
