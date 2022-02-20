const quizData = [
    {
        question: "What according to you is Cyberbullying in this scenario?",
        a: "An email by a friend.",
        b: "A threatening email",
        c: "When someone hits you",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Who do you tell your password to?",
        a: "To my friends",
        b: "To my family",
        c: "None of the above",
        d: "Anyone and Everyone",
        correct: "c",
    },
    {
        question: "What do you do when someone sends you a threatening email?",

        a: "I don't respond",
        b: "I tell my parents or report to the authorities",
        c: "I face it by myself",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Do you think that your date of birth is a good password?",
        a: "Yes, I can easily remember it",
        b: "No",
        c: "I am not sure",
        d: "none of the above",
        correct: "b",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <center><h2 class="green-col box-shadow px-8 py-2 mt-8 rounded-xl text-white font-semibold tracking-wide"
           style="box-shadow: 10px 10px #d6e4e5;">>You answered ${score}/${quizData.length} questions correctly</h2>
           
           `
       }
    }
})
//<button onclick="location.reload()">Reload the quiz</button></center>