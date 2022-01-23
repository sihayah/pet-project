async function newFormHandler(event) {
    event.preventDefault();
  
    const pet_name = document.querySelector('input[name="post-title"]').value;
    const description = document.querySelector('textarea').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        pet_name,
        description
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
  }
  
  document.querySelector('.create-post-form').addEventListener('submit', newFormHandler);