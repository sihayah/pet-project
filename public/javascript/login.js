async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
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
<<<<<<< HEAD
};

    document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
=======

    document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
>>>>>>> 0b82d9e68246e7f642e5f056c47d16d0790b7b5b
