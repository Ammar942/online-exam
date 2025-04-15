$(document).ready(() => {
  let users = [];
  let isValidSignUp;
  let isValidLogin;
  users = JSON.parse(localStorage.getItem("users"));
  let currentUser;
  //click create Account
  $("#goToSignup").on("click", () => {
    sliding.classList.remove("translate-x-0");
    sliding.classList.add("translate-x-full");
    $(".signup").removeClass("hidden");
    $(".signup").removeClass("md:flex");
    $(".signup").addClass("flex");
    $(".login").removeClass("flex");
    $(".login").addClass("md:flex");
    $(".login").addClass("hidden");
    $("#loginForm")[0].reset();
    $(".err-msg").remove();
    $("input").removeClass("border-red-700");
  });
  //click back to login
  $("#goToLogin").on("click", () => {
    sliding.classList.remove("translate-x-full");
    sliding.classList.add("translate-x-0");
    $(".signup").removeClass("flex");
    $(".signup").addClass("hidden");
    $(".signup").addClass("md:flex");
    $(".login").removeClass("hidden");
    $(".login").removeClass("md:flex");
    $(".login").addClass("flex");
    $("#signupForm")[0].reset();
    $(".err-msg").remove();
    $("input").removeClass("border-red-700");
  });
  $("#signupForm").on("submit", (e) => {
    e.preventDefault();
    $(".err-msg").remove();
    $("input").removeClass("border-red-700");
    const fName = $("#signUpFName").val();
    const lName = $("#signUpLName").val();
    const email = $("#signUpEmail").val();
    const pass = $("#signUpPassword").val();
    const confirmPass = $("#signUpConfirmPassword").val();

    const nameRegex = /^[a-zA-Z]{3,10}$/;
    const emailRegex = /^[a-zA-Z0-9._]+@(gmail|yahoo|outlook)+\.[a-z]{2,4}$/;
    isValidSignUp = true;
    let isExist = false;
    // firstName Validation
    if (!fName) {
      isValidSignUp = false;
      showErrorMsg("#signUpFName", "first name is required");
    } else if (!nameRegex.test(fName)) {
      isValidSignUp = false;
      showErrorMsg("#signUpFName", "please enter a valid name");
    }
    // lastName Validation
    if (!lName) {
      isValidSignUp = false;
      showErrorMsg("#signUpLName", "first name is required");
    } else if (!nameRegex.test(lName)) {
      isValidSignUp = false;
      showErrorMsg("#signUpLName", "please enter a valid name");
    }
    // email validation
    if (localStorage.getItem("users")) {
      users.forEach((u, i) => {
        if (email === u.email) {
          isExist = true;
        }
      });
    }
    if (!email) {
      isValidSignUp = false;
      showErrorMsg("#signUpEmail", "email is required");
    } else if (!emailRegex.test(email)) {
      isValidSignUp = false;
      showErrorMsg(
        "#signUpEmail",
        "please enter a valid email (manosa.ammar@gmail.com)"
      );
    } else if (isExist) {
      isValidSignUp = false;
      showErrorMsg("#signUpEmail", "this user is already exists please login");
    }

    if (!pass) {
      isValidSignUp = false;
      showErrorMsg("#signUpPassword", "password is required");
    }
    if (pass !== confirmPass) {
      isValidSignUp = false;
      showErrorMsg("#signUpConfirmPassword", "password not match");
    }
    if (isValidSignUp) {
      currentUser = saveToLocalStorage(fName, lName, email, pass);
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      $("#signupForm")[0].reset();
      window.location.replace("./startExam.html");
    }
    console.log(JSON.parse(localStorage.getItem("marina@gmail.com")));
  });
  // helper Functions
  const showErrorMsg = (input, msg) => {
    $(input)
      .after(`<p class="err-msg lowercase">${msg}</p>`)
      .addClass("border-red-700");
  };
  const saveToLocalStorage = (fname, lname, email, pass) => {
    let userInfo = {
      name: fname,
      lname: lname,
      email: email,
      pass: pass,
    };
    users.push(userInfo);

    localStorage.setItem(`users`, JSON.stringify(users));
    return userInfo;
  };

  $("#loginForm").on("submit", (e) => {
    e.preventDefault();
    $(".err-msg").remove();
    $("input").removeClass("border-red-700");
    let user;
    const email = $("#loginEmail").val();
    const pass = $("#loginPassword").val();
    const emailRegex = /^[a-zA-Z0-9._]+@(gmail|yahoo|outlook)+\.[a-z]{2,4}$/;
    if (localStorage.getItem("users")) {
      users.forEach((u, i) => {
        if (email === u.email) {
          user = u;
        }
      });
    }
    isValidLogin = true;

    // email validation
    if (!email) {
      isValidLogin = false;
      showErrorMsg("#loginEmail", "email is required");
    } else if (!emailRegex.test(email)) {
      isValidLogin = false;
      showErrorMsg(
        "#loginEmail",
        "please enter a valid email (manosa.ammar@gmail.com)"
      );
    } else if (!user || !(email === user.email)) {
      isValidLogin = false;
      showErrorMsg(
        "#loginEmail",
        "no account with this email please create account"
      );
    }
    // pass validation
    if (!pass) {
      isValidLogin = false;
      showErrorMsg("#loginPassword", "password is required");
    }
    // /////////////////////////////////////////////////////////////////////
    else if (!user || !(pass === user.pass)) {
      isValidLogin = false;
      showErrorMsg("#loginPassword", "incorrect password");
    }

    if (isValidLogin) {
      currentUser = user;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      $("#loginForm")[0].reset();
      window.location.replace("./startExam.html");
    }
  });
  // navigate to login
  $(".btn")
    .eq(0)
    .on("click", () => {
      window.location.replace("./startExam.html");
    });
});
