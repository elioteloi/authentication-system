fetch("http://127.0.0.1:3000/dataPost")
  .then((data) => data.json())
  .then((result) => {
    console.log(result);
  });

const emailLogin = document.getElementById("email-login-in");

const passwordLogin = document.getElementById("password-login-in");
const buttonLogin = document.getElementById("button-log-in");
const divCredential = document.getElementById("div-credential");

const error = document.createElement("h1");
divCredential.appendChild(error);

// console.log(localStorage.getItem("users"));
// const userParse = JSON.parse(localStorage.getItem("users"));

// console.log(userParse);

function correctUser(params) {
  fetch("http://127.0.0.1:3000/dataPost")
    .then((data) => data.json())
    .then((result) => {
      console.log(result);
      result.forEach((element) => {
        if (
          emailLogin.value === element.email &&
          passwordLogin.value === element.password
        ) {
          window.location.href = "home.html?data=value";
        } else {
          error.innerHTML = `your password or email is incorect`;
        }
      });
    });
}

buttonLogin.addEventListener("click", () => {
  correctUser();
});
