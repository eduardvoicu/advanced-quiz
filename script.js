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

// below are the questions along with the correct answers for the Quiz

const questions = [
    {
        q:'What software do you use to create and edit JavaScript programs?',
        options:['A browser', 'A text editor', 'A pencil and a piece of paper', 'A JavaScript editor'],
        answer:1
    },
    {
        q:'How to write an IF statemente in JavaScript?',
        options:['if i==5 then', 'if(i==5)', 'if i= 5', 'if i = 5 then'],
        answer:1
    },
    {
        q:'What should appear at the very end of a JavaScript script embedded in an HTML file?',
        options:['The <script> tag', 'The </javascript> tag', 'The END statement', 'The </script> tag'],
        answer:3
    }
    {
        q:'Where can you place scripts?',
        options:['In the body of a page', 'Within an HTML tag', 'In a separate file', 'All of the above'],
        answer:3
    }
]