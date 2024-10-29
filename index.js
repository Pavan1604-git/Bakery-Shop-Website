let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let messageEl = document.getElementById("message") 


let buttonEl = document.getElementById("button");

function getUserDetails() {
    let name = nameEl.value;
    let email = emailEl.value;
    let message = messageEl.value 

    console.log(name)
    console.log(email)
    console.log(message)
}