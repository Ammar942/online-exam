export default async function getQuestion() {
  try {
    const Questions = await fetch("../../Question.json");
    const data = await Questions.json();
    localStorage.setItem("Question", JSON.stringify(data));
    localStorage.setItem("QuestionError", false);
    return data;
  } catch (error) {
    console.log("error: ", error);
    localStorage.setItem("QuestionError", true);
    return false;
  }
}
