'use strict';

function validateForm() {
  var formData = [
    { field: "name", value: document.Form.name.value },
    { field: "email", value: document.Form.email.value },
    { field: "mobile", value: document.Form.mobile.value },
    { field: "state", value: document.Form.state.value },
    { field: "cdl", value: document.Form.cdl.value }
  ];  

  let nameError = true;
  let emailError = true;
  let mobileError = true;
  let stateError = true;
  let cdlError = true;

  var nameRegex = /[a-zA-Z\s]+$/;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var mobileRegex = /^[1-9]\d{9}$/;

  function printError(id, message) {
    document.getElementById(id).innerHTML = message;
  }

  for (let i = 0; i < formData.length; i++) {
    let data = formData[i];
    if (data.value === "") {
      printError(data.field + "Error", "Please enter your " + data.field);
      var elem = document.getElementById(data.field);
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      switch (data.field) {
        case "name":
          if (nameRegex.test(data.value) === false) {
            printError(data.field + "Error", "Please enter a valid name");
            var elem = document.getElementById(data.field);
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
          } else {
            printError(data.field + "Error", "");
            nameError = false;
            var elem = document.getElementById(data.field);
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
          }
          break;

        case "email":
          if (emailRegex.test(data.value) === false) {
            printError(data.field + "Error", "Please enter a valid email");
            var elem = document.getElementById(data.field);
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
          } else {
            printError(data.field + "Error", "");
            emailError = false;
            var elem = document.getElementById(data.field);
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
          }
          break;

        case "mobile":
          if (mobileRegex.test(data.value) === false) {
            printError(data.field + "Error", "Please enter a valid phone number");
            var elem = document.getElementById(data.field);
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
          } else {
            printError(data.field + "Error", "");
            mobileError = false;
            var elem = document.getElementById(data.field);
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
          }
          break;

        case "state":
          if (data.value === "Select") {
            printError(data.field + "Error", "Please select your state");
            var elem = document.getElementById(data.field);
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
          } else {
            printError(data.field + "Error", "");
            stateError = false;
            var elem = document.getElementById(data.field);
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
          }
          break;

        case "cdl":
          if (data.value === "") {
            printError(data.field + "Error", "Please select Yes or No");
            var elem = document.getElementById(data.field);
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
          } else {
            printError(data.field + "Error", "");
            cdlError = false;
            var elem = document.getElementById(data.field);
            elem.classList.add("input-3");
            elem.classList.remove("input-4");
          }
          break;

        default:
          break;
      }
    }
  }

  if (nameError || emailError || mobileError || stateError || cdlError) {
    return false;
  } else {
    return true;
  }
}
