// localStorage.removeItem("Question");
$(document).ready(() => {
  // localStorage.clear();
  let users = [];
  // localStorage.setItem("users", JSON.stringify(users));
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
    let isExist = false;
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
    if (localStorage.getItem("users")) {
      users.forEach((u, i) => {
        if (email === u.email) {
          isExist = true;
        }
      });
    }
    if (!email) {
      isValid = false;
      showErrorMsg("#signUpEmail", "email is required");
    } else if (!emailRegex.test(email)) {
      isValid = false;
      showErrorMsg(
        "#signUpEmail",
        "please enter a valid email (manosa.ammar@gmail.com)"
      );
    } else if (isExist) {
      isValid = false;
      showErrorMsg("#signUpEmail", "this user is already exists please login");
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
    console.log("before", users);
    users.push(userInfo);
    console.log("after", users);

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
    let isValid = true;

    console.log(email);
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
    } else if (!user || !(email === user.email)) {
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
  // getQuestions();
  // $(".start-exam")
  //   .eq(0)
  //   .on("click", () => {
  //     let isError = localStorage.getItem("QuestionError");
  //     console.log(isError);
  //     // console.log(localStorage.getItem("QuestionError"));
  //     if (isError === "false") {
  //       window.location.replace("./exam.html");
  //       localStorage.removeItem("studentAnswers");
  //       localStorage.removeItem("remainingTime");
  //     } else {
  //       window.location.replace("./timeout.html");
  //     }
  //     // try {
  //     //   if (funreturn) getQuestions();
  //     //   // window.location.replace("./exam.html");
  //     //   localStorage.removeItem("studentAnswers");
  //     //   localStorage.removeItem("remainingTime");
  //     // } catch (error) {
  //     //   console.log("error", error);
  //     //   window.location.replace("./timeout.html");
  //     // }
  //   });
});
