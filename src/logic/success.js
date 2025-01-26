// import { Question } from "./exam.js";
let Question = JSON.parse(localStorage.getItem("Question"));
let studentGrade = localStorage.getItem("grade");
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

$(".grade").text(`${Math.ceil((studentGrade * 100) / Question.length)}%`);

$(".user-name").text(`${currentUser.name} ${currentUser.lname}`);
