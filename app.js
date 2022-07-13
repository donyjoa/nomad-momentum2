const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HiDDEN_CALSSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem("username", userName);
  loginForm.classList.add(HiDDEN_CALSSNAME);
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove(HiDDEN_CALSSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
