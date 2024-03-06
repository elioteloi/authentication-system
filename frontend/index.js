// async function postJSON(data) {
//   try {
//     const response = await fetch("http://127.0.0.1:5500/data.json", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     // Handle response here if needed
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

const users = [
  { email: "john@example.com", password: "password1" },
  { email: "marc@example.com", password: "password2" },
  { email: "steve@example.com", password: "password3" },
  { email: "dakota@example.com", password: "password4" },
  { email: "ben@example.com", password: "password5" },
];

const div = document.getElementById("div-input");
const emailSignIn = document.getElementById("email-sign-in");
const passwordSignIn = document.getElementById("password-sign-in");
const buttonSignIn = document.getElementById("button-sign-in");
const result = document.createElement("h4");
const error = document.createElement("h4");
div.appendChild(result);
div.appendChild(error);

emailSignIn.addEventListener("input", () => {
  console.log(emailSignIn.value);
});

passwordSignIn.addEventListener("input", () => {
  console.log(passwordSignIn.value);
});

function createUsers(params) {
  let createUser = {
    email: emailSignIn.value,
    password: passwordSignIn.value,
  };

  let pattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
  let emailValue = emailSignIn.value;
  let matches = emailValue.match(pattern);
  if (matches) {
    result.innerHTML = "Email match the patterns";
    error.innerHTML = "";

    users.push(createUser);
    console.log(createUser);
    const usersStringify = JSON.stringify(users);
    localStorage.setItem("users", usersStringify);
  } else {
    error.innerHTML =
      "your email dont have the required pattern: 'example@mail.com' ";
    result.innerHTML = "";
  }
  console.log(localStorage.getItem("users"));
}

buttonSignIn.addEventListener("click", () => {
  createUsers();
});

console.log(localStorage.getItem("users"));
