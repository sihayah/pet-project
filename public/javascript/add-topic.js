async function topicButtonHandler(event) {
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