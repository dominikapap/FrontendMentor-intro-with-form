/*const inputs = [
  {name: firstName,error: firstNameErr,message: "First name cannot be empty"},
  {name: lastName, error: lastNameErr, message: "Last name cannot be empty"},
  {name: email, error: emailErr, message: "Looks like this is not an email"},
  {name: password, error: passwordErr, message: "Password cannot be empty"},
];*/

const form = document.querySelector("#form");
const inp = document.querySelectorAll("input");
const errors = document.querySelectorAll(".errorMsg");
const messages = [
  "First name cannot be empty",
  "Last name cannot be empty",
  "Looks like this is not an email",
  "Password cannot be empty",
];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  for (let i = 0; i < inp.length; i++) {
    if (!inp[i].checkValidity()) {
      inp[i].classList.remove("focused");
      inp[i].classList.add("errorInp");
      inp[i].placeholder = "";
      errors[i].innerHTML = messages[i];
    } else {
      inp[i].classList.remove("errorInp");
      errors[i].innerHTML = "";
    }
  }
});

for (let i = 0; i < inp.length; i++) {
  inp[i].addEventListener("focusin", () => {
    inp[i].classList.add("focused");
    errors[i].innerHTML = "";
  });
  inp[i].addEventListener("focusout", () => {
    inp[i].classList.remove("focused");
    errors[i].innerHTML = messages[i];
  });
}
