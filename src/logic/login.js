$("#goToSignup").on("click", () => {
  console.log("click");
  sliding.classList.remove("translate-x-0");
  sliding.classList.add("translate-x-full");
});

$("#goToLogin").on("click", () => {
  console.log("click");
  sliding.classList.remove("translate-x-full");
  sliding.classList.add("translate-x-0");
});

$(document).ready(() => {
  $("#signupForm").on("submit", (e) => {
    e.preventDefault();
    $(".err-msg").remove();
    $("input").removeClass("border-red-700");
    const fName = $("#signUpFName").val();
    const lName = $("#signUpLName").val();
    const email = $("#signUpEmail").val();
    const pass = $("#signUpPassword").val();
    const confirmPass = $("#signUpConfirmPassword").val();

    const nameRegex = /^[a-zA-Z ]{3,10}$/;
    const emailRegex = /^$/;

    let isValid = true;

    if (!fName) {
      isValid = false;
      showErrorMsg("#signUpFName", "first name is required");
    } else if (!nameRegex.test(fName)) {
      isValid = false;
      showErrorMsg("#signUpFName", "please enter a valid name");
    }
    if (!lName) {
      isValid = false;
      showErrorMsg("#signUpLName", "first name is required");
    } else if (!nameRegex.test(lName)) {
      isValid = false;
      showErrorMsg("#signUpLName", "please enter a valid name");
    }
    console.log(isValid);
  });
  const showErrorMsg = (input, msg) => {
    $(input).after(`<p class="err-msg">${msg}</p>`).addClass("border-red-700");
  };
});
