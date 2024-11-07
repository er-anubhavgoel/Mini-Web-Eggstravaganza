let loginUserEmail = document.querySelector("#email")
let loginUserPassword = document.querySelector("#password")
let loginform = document.querySelector("#loginform")

// Fetching data from localstorage while converting from JSON to JS object
let registeredUsers = JSON.parse(localStorage.getItem("users"));

loginform.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Logged In");

    // console.log(loginUserEmail.value);
    // console.log(loginUserPassword.value);
    console.log(registeredUsers);
    
    // Finding registered user
    let auth = registeredUsers.find((user)=> {
        // console.log(user);
        return (
            user.email == loginUserEmail.value && user.password == loginUserPassword.value
        )
    })

    console.log("User authorised? ", auth);
    // Authorisation
    if (auth) {
        window.location.assign("products.html");
    }
    else {
        window.location.assign("register.html")
    }
});