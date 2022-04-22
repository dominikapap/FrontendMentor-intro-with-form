/*const firstName = document.getElementById("firstName");
const firstNameErr = document.getElementById("firstNameErr");
const lastName = document.getElementById("lastName");
const lastNameErr = document.getElementById("lastNameErr");
const email = document.getElementById("email");
const emailErr = document.getElementById("emailErr");
const password = document.getElementById("password");
const passwordErr = document.getElementById("passwordErr");
const form = document.getElementById("form");
const claimBtn = document.getElementById("claimBtn");*/

let formElements = [firstName, firstNameErr, lastName, lastNameErr, email, emailErr, password, passwordErr, form, claimBtn]


for (let i = 0; i< formElements.length; i++){
     formElements[i] = document.getElementById(`${formElements[i]}`);
}

const inputs = [
  {name: firstName,error: firstNameErr,message: "First name cannot be empty"},
  {name: lastName, error: lastNameErr, message: "Last name cannot be empty"},
  {name: email, error: emailErr, message: "Looks like this is not an email"},
  {name: password, error: passwordErr, message: "Password cannot be empty"},
];


form.addEventListener("submit", (e) => {
  e.preventDefault();
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].name.checkValidity()) {
        inputs[i].name.classList.add("errorInp");
        inputs[i].name.placeholder = "";
        inputs[i].error.classList.add("show");
        inputs[i].error.innerHTML = inputs[i].message;
    } else {
        inputs[i].name.classList.remove("errorInp");
        inputs[i].error.classList.remove("show");
        inputs[i].error.innerHTML = "";
    }
  }
});


