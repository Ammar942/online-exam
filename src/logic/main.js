import getQuestions from "./getQuestion.js";
$(document).ready(() => {
  // localStorage.clear();
  let users = [];
  users = JSON.parse(localStorage.getItem("users"));
  let currentUser;
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
    let isValid = true;
    // firstName Validation
    if (!fName) {
      isValid = false;
      showErrorMsg("#signUpFName", "first name is required");
    } else if (!nameRegex.test(fName)) {
      isValid = false;
      showErrorMsg("#signUpFName", "please enter a valid name");
    }
    // lastName Validation
    if (!lName) {
      isValid = false;
      showErrorMsg("#signUpLName", "first name is required");
    } else if (!nameRegex.test(lName)) {
      isValid = false;
      showErrorMsg("#signUpLName", "please enter a valid name");
    }
    // email validation
    if (!email) {
      isValid = false;
      showErrorMsg("#signUpEmail", "email is required");
    } else if (!emailRegex.test(email)) {
      isValid = false;
      showErrorMsg(
        "#signUpEmail",
        "please enter a valid email (manosa.ammar@gmail.com)"
      );
    }
    if (!pass) {
      isValid = false;
      showErrorMsg("#signUpPassword", "password is required");
    }
    if (pass !== confirmPass) {
      isValid = false;
      showErrorMsg("#signUpConfirmPassword", "password not match");
    }
    if (isValid) {
      saveToLocalStorage(fName, lName, email, pass);
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
  };

  $("#loginForm").on("submit", (e) => {
    e.preventDefault();
    $(".err-msg").remove();
    $("input").removeClass("border-red-700");
    let user;
    const email = $("#loginEmail").val();
    const pass = $("#loginPassword").val();
    const emailRegex = /^[a-zA-Z0-9._]+@(gmail|yahoo|outlook)+\.[a-z]{2,4}$/;
    users.forEach((u, i) => {
      if (email === u.email) {
        user = u;
      }
    });
    console.log(email);
    let isValid = true;
    // email validation
    if (!email) {
      isValid = false;
      showErrorMsg("#loginEmail", "email is required");
    } else if (!emailRegex.test(email)) {
      isValid = false;
      showErrorMsg(
        "#loginEmail",
        "please enter a valid email (manosa.ammar@gmail.com)"
      );
      // console.log(email, user.email);
    } else if (!user || !(email === user.email)) {
      console.log(user, email, user.email);
      isValid = false;
      showErrorMsg(
        "#loginEmail",
        "no account with this email please create account"
      );
    }
    // pass validation
    if (!pass) {
      isValid = false;
      showErrorMsg("#loginPassword", "password is required");
    }
    // /////////////////////////////////////////////////////////////////////p
    else if (!user || !(pass === user.pass)) {
      isValid = false;
      showErrorMsg("#loginPassword", "incorrect password");
    }
    if (isValid) {
      // saveToLocalStorage(fName, lName, email, pass);
      // currentUser = JSON.parse(localStorage.getItem(`${email}`));
      currentUser = user;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      $("#loginForm")[0].reset();
      window.location.replace("./startExam.html");
    }
    // console.log(currentUser);
  });
  // navigate to login
  $(".btn")
    .eq(0)
    .on("click", () => {
      window.location.replace("./startExam.html");
    });
  // navigate to exam
  $(".start-exam")
    .eq(0)
    .on("click", () => {
      getQuestions();
      window.location.replace("./exam.html");
      localStorage.removeItem("studentAnswers");
    });
});
