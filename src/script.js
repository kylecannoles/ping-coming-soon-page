function emailIsValid(click) {
  var form = document.createElement("form");
  form.setAttribute("method", "post");
  form.style.display = "hidden";
  document.body.appendChild(form);
  var email = document.getElementById("email").value;
  console.log(email);
  if (/\S+@\S+\.\S+/.test(email)) {
    document.getElementById("email").style.borderColor = "lightgray";
    form.setAttribute("action", "https://localhost?email=" + email);
    form.submit();
  } else {
    document.getElementById("email").style.borderColor = "red";
    const emailError = document.getElementById("email-error");
    emailError.classList.add("show-error");
    emailError.classList.remove("hidden");
  }
}

const emailBtn = document.getElementById("email-btn");
emailBtn.addEventListener("click", emailIsValid, false);
