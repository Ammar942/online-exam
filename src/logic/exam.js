////////////////////////////////////////////  Timer Logic  ////////////////////////////////////////////
let timerInterval;
let duration = 5 * 60 * 1001;
const endTime = Date.now() + duration;
function updateTimer() {
  let remainingTime = Math.max(0, endTime - Date.now());
  const minutes = Math.floor(remainingTime / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  $(".timer").eq(0).html(`${minutes} : ${seconds}`);
  if (remainingTime <= 60000) {
    $(".timer").eq(0).addClass("text-red-700");
  }
  if (remainingTime <= 60000 && remainingTime >= 59000) {
    console.log("🌲");
    $(".overlay-time").removeClass("hidden");
  }
  if (remainingTime <= 0) {
    clearInterval(timerInterval);
    $(".timer").eq(0).html("Time's up!");
    window.location.replace("./timeout.html");
  }
}
updateTimer();
timerInterval = setInterval(updateTimer, 1000);

$(".ok").on("click", function () {
  $(".overlay-time").addClass("hidden");
});
////////////////////////////////////////////    display Questions   //////////////////////////////////////////
const Question = JSON.parse(localStorage.getItem("Question"));
let shuffledQuestions = [...Question].sort(() => Math.random() - 0.5);
let currentIndex = 0;
function displayQuestions(i) {
  if (currentIndex == shuffledQuestions.length - 1) {
    console.log(currentIndex, shuffledQuestions.length);
    $(".right").addClass("disableBtn");
    $(".left").removeClass("disableBtn");
  }
  $(".flag-icon").removeClass("fa-brands");
  if (i === 0 || i) {
    if (i == 0) {
      $(".left").addClass("disableBtn");
      $(".right").removeClass("disableBtn");
    } else if (i == shuffledQuestions.length - 1) {
      $(".right").addClass("disableBtn");
      $(".left").removeClass("disableBtn");
    } else {
      $(".left").removeClass("disableBtn");
      $(".right").removeClass("disableBtn");
    }
    $(".questionTitle")
      .eq(0)
      .html(`${i + 1} - ${shuffledQuestions[i].question}`);
    if (shuffledQuestions[i].isFlagged) {
      $(".flag-icon").addClass("fa-brands");
    } else {
      $(".flag-icon").removeClass("fa-brands");
    }
    // shuffledQuestions[i].answer.forEach((ans, index) => {
    //   $(".answer").eq(index).html(`${ans.ans} bb`); //!updated in else case
    // });
    //empty answers container
    $("#answers").eq(0).empty();
    //loop for question Answers to append //!test this case
    shuffledQuestions[i].answer.forEach((ans, index) => {
      // console.log(ans.ans, index);
      $("#answers").eq(0)
        .append(` <label class="answer"><div class="p-1 rounded-lg border-2">
               <input
                  type="radio"
                  name="${shuffledQuestions[currentIndex].question}"
                  value="${ans.ans}"
                  class="ans-input accent-primary hover:accent-primary"
                  ${ans.isChecked === true ? "checked" : ""}
                />
                ${ans.ans}
              </div></label> `);
    });
  } else {
    $(".questionTitle")
      .eq(0)
      .html(
        `${currentIndex + 1} - ${shuffledQuestions[currentIndex].question}`
      );
    if (shuffledQuestions[currentIndex].isFlagged) {
      $(".flag-icon").addClass("fa-brands");
    } else {
      $(".flag-icon").removeClass("fa-brands");
    }
    //empty answers container
    $("#answers").eq(0).empty();
    //loop for question Answers to append
    shuffledQuestions[currentIndex].answer.forEach((ans, index) => {
      console.log(ans);
      $("#answers").eq(0)
        .append(` <label class="answer"><div class="p-1 rounded-lg border-2">
                 <input
                    type="radio"
                    name="${shuffledQuestions[currentIndex].question}"
                    value="${ans.ans}"
                    class="ans-input accent-primary hover:accent-primary"
                    ${ans.isChecked === true ? "checked" : ""}
                  />
                  ${ans.ans}
                </div></label> `);
    });
  }
}
displayQuestions();
$(".left").addClass("disableBtn");
$(".right")
  .eq(0)
  .on("click", function () {
    if (currentIndex < shuffledQuestions.length - 1) {
      currentIndex++;
      displayQuestions();
      $(".left").removeClass("disableBtn");
      if (currentIndex == shuffledQuestions.length - 1) {
        $(".right").addClass("disableBtn");
      }
    }
  });
$(".left")
  .eq(0)
  .on("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      $(".left").removeClass("disableBtn");
      displayQuestions();
      $(".right").removeClass("disableBtn");
      if (currentIndex == 0) {
        $(".left").addClass("disableBtn");
      }
    }
  });

////////////////////////////////  flag    ////////////////////////////////
let flaggedQArr = [];
$(".flag").on("click", function () {
  $(".flag-icon").toggleClass("fa-brands");
  if ($(".flag-icon").hasClass("fa-brands")) {
    flaggedQArr.push(shuffledQuestions[currentIndex].question);
    addToMarkedQ(flaggedQArr);
    shuffledQuestions[currentIndex].isFlagged = true;
  } else {
    $(".flag-text").html("Flag");
    let flagText = $(this).siblings().eq(0).html();
    flaggedQArr = flaggedQArr.filter((q, i) => {
      return q !== flagText.slice(4, flagText.length);
    });
    shuffledQuestions[currentIndex].isFlagged = false;

    addToMarkedQ(flaggedQArr);
  }
  console.log(flaggedQArr);
});

function addToMarkedQ(Arr) {
  $(".flagged").html("");
  Arr.forEach((Q, i) => {
    $(".flagged").append(`
      <div class="flex justify-between items-center cursor-pointer">
      <p class="questionTitleFlagged w-[80%]">${Q}</p>
      <span class=""><i class="fa-solid fa-trash trash"></i></span>
      </div>
   `);
  });
}
////////////////////////////////  clicking title   //////////////////////////////////

$("#markedQ").on("click", ".questionTitleFlagged", function () {
  let flagText = $(this).eq(0).html();
  shuffledQuestions.forEach((q, i) => {
    if (q.question === flagText) {
      currentIndex = i;
      displayQuestions(i);
    }
  });
});
////////////////////////////////  clicking Trash Icon   //////////////////////////////////
$("#markedQ").on("click", ".trash", function () {
  let flagText = $(this).parent().siblings().eq(0).html();
  flaggedQArr = flaggedQArr.filter((q) => {
    return q !== flagText;
  });
  shuffledQuestions.forEach((q) => {
    if (q.question === flagText) {
      q.isFlagged = false;
    }
  });
  addToMarkedQ(flaggedQArr);
  if (shuffledQuestions[currentIndex].question === flagText) {
    $(".flag-icon").removeClass("fa-brands");
  }
});

////////////////////////////////  save answers   //////////////////////////////////
const studentAnswers = {}; //!set answer selected in ui
$("#answers").on("change", ".ans-input", function (e) {
  // console.log(shuffledQuestions);
  Question.forEach((Q, i) => {
    // i => questionIndexInOriginalObj;
    if (Q.question === e.target.name) {
      studentAnswers[i] = $(e.target).val();
      $(e.target).attr("checked");

      shuffledQuestions.forEach((ShufQ, i) => {
        if (ShufQ.question === Q.question) {
          ShufQ.answer.forEach((ans, i) => {
            // console.log(ans.ans, $(e.target).val());
            if (ans.ans === $(e.target).val()) {
              ans.isChecked = true;
            } else {
              ans.isChecked = false;
            }
          });
        }
      });
    }
  });
  console.log(shuffledQuestions);
  console.log(studentAnswers);
});

////////////////////////////////  save answers in sessionStorage   //////////////////////////////////
$(".submit").on("click", function () {
  localStorage.setItem("studentAnswers", JSON.stringify(studentAnswers));
  console.log(`your grade is ${calcGrades()} out of ${Question.length}`); //!grades 3la ma-tofrag
  let grade = calcGrades();
  if (grade > Question.length / 2) {
    console.log("success");
    window.location.replace("./success.html");
  } else {
    console.log("fail");
    window.location.replace("./fail.html");
  }
});
////////////////////////////////  calc grades   //////////////////////////////////
function calcGrades() {
  let grade = 0;
  const correctAnswers = getCorrectAnswers();
  const studentAnswers = JSON.parse(localStorage.getItem("studentAnswers"));

  console.log(correctAnswers);
  correctAnswers.forEach((ans, i) => {
    if (ans === studentAnswers[i]) {
      grade++;
    }
  });
  return grade;
}
function getCorrectAnswers() {
  let correctAnswer = [];
  Question.forEach((ques) => {
    correctAnswer.push(ques.answer.filter((ans) => ans.isTrue)[0].ans);
    // console.log(correctAnswer);
  });
  return correctAnswer;
}
