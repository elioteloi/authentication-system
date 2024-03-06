const users = [
  { email: "john@example.com", password: "password1" },
  { email: "marc@example.com", password: "password2" },
  { email: "steve@example.com", password: "password3" },
  { email: "dakota@example.com", password: "password4" },
  { email: "ben@example.com", password: "password5" },
];

const emailLogin = document.getElementById("email-login-in");

const passwordLogin = document.getElementById("password-login-in");
const buttonLogin = document.getElementById("button-log-in");
const divCredential = document.getElementById("div-credential");

const error = document.createElement("h1");
divCredential.appendChild(error);

console.log(localStorage.getItem("users"));
const userParse = JSON.parse(localStorage.getItem("users"));

console.log(userParse);

function correctUser(params) {
  userParse.forEach((element) => {
    if (
      emailLogin.value === element.email &&
      passwordLogin.value === element.password
    ) {
      window.location.href = "home.html?data=value";
    } else {
      error.innerHTML = `your password or email is incorect`;
    }
  });
}

buttonLogin.addEventListener("click", () => {
  correctUser();
});
