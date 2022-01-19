async function signUpFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(response);
        //check response status
        if (response.ok) {
            console.log('success');
            document.location.replace('/dashboard/');
        } else {
            alert(response.statusText);
        }
    }
}

<<<<<<< HEAD
document.querySelector('.signup-form').addEventListener('submit', signUpFormHandler);
=======
document.querySelector('.signup-form').addEventListener('submit', signUpFormHandler);
>>>>>>> 0b82d9e68246e7f642e5f056c47d16d0790b7b5b
