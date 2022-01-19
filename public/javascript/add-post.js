async function newFormHandler(event) {
    event.preventDefault();
<<<<<<< HEAD
  
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
=======

    const title = document.querySelector('input[name="post-title"]').value;


    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
>>>>>>> 0b82d9e68246e7f642e5f056c47d16d0790b7b5b
    });
  
    if (response.ok) {
<<<<<<< HEAD
      document.location.replace(`/create/topic`);
=======
        document.location.replace('/add-topic');
>>>>>>> 0b82d9e68246e7f642e5f056c47d16d0790b7b5b
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.create-post-form').addEventListener('submit', newFormHandler);