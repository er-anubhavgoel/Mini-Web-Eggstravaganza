let usernameInput = document.querySelector("#username")
let emailInput = document.querySelector("#email")
let passwordInput = document.querySelector("#password")
let registerform = document.querySelector("#registerform")
let users = [];

// console.log(usernameInput);
// console.log(emailInput);
// console.log(passwordInput);

registerform.addEventListener("submit", (event) => {
    event.preventDefault();     //This stops the page from getting refreshed
    // console.log(event);
    console.log("Form is Submitted");
    // console.log(usernameInput.value);
    // console.log(emailInput.value);
    // console.log(passwordInput.value);

    let registerUser = {
        username: usernameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    }
    console.log(registerUser);
    users.push(registerUser);

    // Pushing JS object to LocalStorage after converting it to JSON
    localStorage.setItem("users", JSON.stringify(users));
    
    usernameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";

    // Navigating to Login Page
    // window.location.assign("login.html"); 
});