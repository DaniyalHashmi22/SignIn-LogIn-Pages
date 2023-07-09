const questions =[
    {
        question:"Inside which HTML element do we put the JavaScript?",
        answers:[
            {text: "scripting",correct:false},
            {text: "js",correct:false},
            {text: "javascript",correct:false},
            {text: "script",correct:true},
        ]
    },
    {
        question:"Where is the correct place to insert a JavaScript?",
        answers:[
            {text: "Both the head section and the body section are correct ",correct:true},
            {text: "The body section",correct:false},
            {text: "The head section",correct:false},
            {text: "None of the above",correct:false},
        ]
    },
    {
        question:"What is the correct syntax for referring to an external script called xxx.js?",
        answers:[
            {text: "script name=xxx.js ",correct:false},
            {text: "script src=xxx.js ",correct:true},
            {text: "script href=xxx.js",correct:false},
            {text: "None of the above",correct:false},
        ]
    },
    {
        question:"The external JavaScript file must contain the <script> tag.",
        answers:[
            {text: "Maybe False",correct:false},
            {text: "Maybe true",correct:false},
            {text: "True",correct:false},
            {text: "False",correct:true},
        ]
   
    },

    {
        question:"Who is your favorite Teacher.",
        answers:[
            {text: "Sir Rizwan",correct:false},
            {text: "Sir Bhatti",correct:false},
            {text: "Sir Rizwan Bhatti",correct:true},
            {text: "Just Sir",correct:false},
        ]
   
    },

    {
        question:"Why Sir Rizwan Bhatti is your favorite Teacher because ?",
        answers:[
            {text: "He know how to teach",correct:true},
            {text: "AAAA Don't no",correct:false},
            {text: "Please don't mind",correct:false},
            {text: "Just for fun",correct:false},
        ]
   
    },

    {
        question:"What we are learning now.",
        answers:[
            {text: "Java Script",correct:false},
            {text: "CSS",correct:false},
            {text: "HTML",correct:false},
            {text: "Firebase",correct:true},
        ]
   
    },

    {
        question:"What is the original name of k2 .",
        answers:[
            {text: "Just K2",correct:false},
            {text: "Mount Godwin-Austen",correct:true},
            {text: "Godwin",correct:false},
            {text: "Karakoram",correct:false},
        ]
   
    },

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz() {
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next"
    showQuestion();
}
function showQuestion() {
   resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
       if(answer.correct){
        button.dataset.correct = answer.correct;
       }
        button.addEventListener("click",selectAnswer);
    })
}

function resetState(){
    nextButton .style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    score++;
    }
    else{
       selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled= "true" ;
    });
    nextButton.style.display="block";
}
 
function showScore(){
    resetState();
questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
nextButton.innerHTML="play Again";
nextButton.style.display="block";

}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();


