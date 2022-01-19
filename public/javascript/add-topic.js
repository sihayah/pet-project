async function topicButtonHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="topic-title"]').value;
    const description = document.querySelector('textarea[name="topic-description"]').value;
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
    const description = document.querySelector('textarea[name="topic-description"]').value;
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
