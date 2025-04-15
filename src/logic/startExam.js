import getQuestions from "./getQuestion.js";

localStorage.removeItem("Question");
localStorage.removeItem("QuestionError");
localStorage.removeItem("grade");
localStorage.removeItem("remainingTime");
// let Question ;
async function start() {
  await getQuestions();
  const Question = JSON.parse(localStorage.getItem("Question"));
  $(".start-exam")
    .eq(0)
    .on("click", () => {
      let isError = localStorage.getItem("QuestionError");
      if (isError === "false") {
        if (Question.length) {
          window.location.replace("./exam.html");
        } else {
          window.location.replace("./empty.html");
        }
        localStorage.removeItem("studentAnswers");
        localStorage.removeItem("remainingTime");
      } else {
        window.location.replace("./tryAgain404.html");
      }
    });
}
start();
