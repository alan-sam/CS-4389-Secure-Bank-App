window.addEventListener("load", function () {
    const container = document.querySelector(".container");
    container.classList.add("show");
});


function login() {
    const username = document.getElementById('Username').value;
    const password = document.getElementById('Password').value;
    
    document.querySelector(".login-form").addEventListener("submit", function (event) {
        event.preventDefault(); // no default submission
        login(); //calls the login method
    });
   // backend and we are fetching with ajax POST request

   
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('loginMessage').textContent = 'Login successful';
            // take you to the dashboard on success login
        } else {
            document.getElementById('loginMessage').textContent = 'Login failed! try again.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function signup() {
    const fullname = document.getElementById('FullName').value;
    const email = document.getElementById('Email').value;
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    document.querySelector(".signup-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission
        signup(); // Call the signup function
    });

    // Send a request to your Spring Boot backend to handle the signup.
    // Similar to the login function, you would send a POST request.

    
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newUsername, newPassword })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('signupMessage').textContent = 'Sign Up successful';
            // You can redirect to the login page or handle it as needed.
        } else {
            document.getElementById('signupMessage').textContent = 'Sign Up failed! try again.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
