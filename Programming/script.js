const questions = [
    {
        question: "Which of the following is not a valid C variable name?",
        answer: [
            {text: "int number;", correct: false},
            {text : "float rate;", correct: false},
            {text: "int variable_count;", correct: false},
            {text: "int $main;", correct: true},
        ]
    },
    {
        question: "Which of the following typecasting is accepted by C language?",
        answer: [
            {text: "Widening conversions", correct: false},
            {text : "Narrowing conversions", correct: false},
            {text: "Widening & Narrowing conversions", correct: true},
            {text: "int $main;", correct: false},
        ]
    },
    {
        question: "Functions in C Language are always _________",
        answer: [
            {text: "internal", correct: false},
            {text : "External", correct: true},
            {text: "Both Internal And External", correct: false},
            {text: "External and Internal are not valid terms for functions", correct: false},
        ]
    },
    {
        question: "What is the extension of java code files?",
        answer: [
            {text: ".js", correct: false},
            {text : ".txt", correct: false},
            {text: ".class", correct: false},
            {text: ".java", correct: true},
        ]
    },
    {
        question: "Which of the following is not an OOPS concept in Java?",
        answer: [
            {text: "Polymorphism", correct: false},
            {text : "Inheritance", correct: false},
            {text: "Compilation", correct: true},
            {text: "Encapsulation", correct: false},
        ]
    },
    {
        question: "Which concept of Java is achieved by combining methods and attribute into a class?",
        answer: [
            {text: "Encapsulation", correct: true},
            {text : "Inheritance", correct: false},
            {text: "Polymorphism", correct: false},
            {text: "Abstraction", correct: false},
        ]
    },
    {
        question: "HTML stands for __________",
        answer: [
            {text: "HyperText Markup Language", correct: true},
            {text : "HyperText Machine Language", correct: false},
            {text: "HyperText Marking Language", correct: false},
            {text: "HighText Marking Language", correct: false},
        ]
    },
    {
        question: "Which of the following CSS selectors are used to specify a group of elements?",
        answer: [
            {text: "tag", correct: false},
            {text : "id", correct: false},
            {text: "class", correct: true},
            {text: "both class and tag", correct: false},
        ]
    },
    {
        question: "Which of the following is not javascript data types?",
        answer: [
            {text: "Null type", correct: false},
            {text : "Undefined type", correct: false},
            {text: "Number type", correct: false},
            {text: "All of the mentioned", correct: true},
        ]
    },
    {
        question: "Which of the following scoping type does JavaScript use?",
        answer: [
            {text: "Sequential", correct: false},
            {text : "Segmental", correct: false},
            {text: "Lexical", correct: true},
            {text: "Literal", correct: false},
        ]
    }
];
let questionElement = document.getElementById("question");
let answerButtons = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    let selectBtn = e.target;
    let isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    } else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} Out Of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();