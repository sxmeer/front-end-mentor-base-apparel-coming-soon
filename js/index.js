document.addEventListener('DOMContentLoaded', (event) => {
  registerEvents();
});

function registerEvents() {
  var inputElement = document.getElementById("form-email-input");
  var form = document.getElementById("email-form");
  var errorSymbol = document.getElementById("form-error");
  var errorMessage = document.getElementsByClassName("error")[0];

  form.addEventListener('submit', (event) => {
    if (!validateEmail(inputElement.value)) {
      event.preventDefault();
      errorSymbol.style.visibility = "visible";
      errorMessage.style.visibility = "visible";
      errorSymbol.style.opacity = "1";
      errorMessage.style.opacity = "1";
      setTimeout(() => {
        errorSymbol.style.opacity = "0";
        errorMessage.style.opacity = "0";
        errorSymbol.style.visibility = "hidden";
        errorMessage.style.visibility = "hidden";
      }, 2000);
    }
  })
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}