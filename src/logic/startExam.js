import getQuestions from "./getQuestion.js";

console.log("start");
localStorage.removeItem("Question");
localStorage.removeItem("QuestionError");
localStorage.removeItem("grade");
localStorage.removeItem("remainingTime");
// let Question ;
async function ay7aga() {
  await getQuestions();
  const Question = JSON.parse(localStorage.getItem("Question"));
  console.log(Question);
  $(".start-exam")
    .eq(0)
    .on("click", () => {
      let isError = localStorage.getItem("QuestionError");
      console.log(isError);
      if (isError === "false") {
        //   console.log(Question);
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
ay7aga();
