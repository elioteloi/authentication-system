const div = document.getElementById("div-input");
const emailSignIn = document.getElementById("email-sign-in");
const passwordSignIn = document.getElementById("password-sign-in");
const buttonSignIn = document.getElementById("button-sign-in");
const result = document.createElement("h4");
const error = document.createElement("h4");
div.appendChild(result);
div.appendChild(error);

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

    try {
      fetch("http://127.0.0.1:3000/dataGet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(createUser),
      });
      // Handle response here if needed
    } catch (error) {
      console.error("Error:", error);
    }

    //
    console.log(createUser);
    const usersStringify = JSON.stringify(createUser);
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
  // postJSON();
});

console.log(localStorage.getItem("users"));
