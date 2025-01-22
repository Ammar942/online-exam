export default async function getQuestion() {
  const Questions = await fetch("../../Question.json");
  const data = await Questions.json();
  localStorage.setItem("Question", JSON.stringify(data));
  return data;
}
