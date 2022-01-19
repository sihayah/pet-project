
async function editFormHandler(event) {
    event.preventDefault();
    const pet_name = document.querySelector('input[name="pet-name"]').value;
    console.log(event.target.children);
    const description = document.querySelector('textarea[name="description"]').value;
    console.log(event.target.children);

    console.log('edit button clicked');
    console.log(window.location.toString().split('/'));
    const urlArray = window.location.toString().split('/');
    const id = urlArray[urlArray.length - 1];
    //need to find a way to get the post title here
    console.log(pet_name);
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            pet_name: pet_name,
            description: description
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(response);
    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}



document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);

