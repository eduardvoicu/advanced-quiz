// first const variable that pulls from the index file to be used later

const answersTrackerContainer = document.querySelector(".answers-tracker");
const options = document.querySelector(".options").children;
const questionNumberSpan = document.querySelector(".question-num-value");
const question=document.querySelector(".question");
const totalQuestionsSpan =document.querySelector(".total-questions");
const correctAnswersSpan =document.querySelector(".correct-answers");
const totalQuestionsSpan2 =document.querySelector(".total-questions2");
const percentageSpan =document.querySelector(".percentage");

// this will keep track of the answered questions and keep track of score, right now it starts at 0 and

let currentIndex;
let index = 0;
let answeredQuestions =[]; // array of anwered question indexes
let score = 0;

// const variables for the answer choices that user will click

const opt1 = document.querySelector(".option1");
const opt2 = document.querySelector(".option2");
const opt3 = document.querySelector(".option3");
const opt4 = document.querySelector(".option4");