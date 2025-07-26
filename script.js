const form = document.querySelector("form");
const submitBtn = document.querySelector("input[type='submit']");
const emailInput = document.querySelector("input[type='email']");
const invalidMessage = document.querySelector(".invalid-message");
const emptyInputMessage = document.querySelector(".empty-input-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (emailInput.value === "") {
    emptyInputMessage.classList.remove("hide");
    emailInput.style.borderColor = "#bf3535";
  } else {
    form.submit();
  }
});

emailInput.addEventListener("invalid", (e) => {
  e.preventDefault();
  if (!emptyInputMessage.classList.contains("hide")) {
    emptyInputMessage.classList.add("hide");
  }
  invalidMessage.classList.toggle("hide");
});
