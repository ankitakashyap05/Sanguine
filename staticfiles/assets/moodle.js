const quizData = [
    {
        question: "How would you rate your day so far?",
        a: "Great, I'm happier than ever!",
        b: "Everthing is as usual",
        c: "I feel like I'm on the verge of depression",
        d: "I'm having trouble organising my thoughts",
        correct: "a",
    },
    {
        question: "Did some incident happen that made you feel anxious?",
        a: "Yes, exactly that's what I was worried about",
        b: "No, everthing is fine uptil now",
        c: "I'm not sure, I'm not sure if I'm anxious",
        d: "Nothing happened, but i am still anxious",
        correct: "b",
    },
    {
        question: "Do you feel to cuddle into that blanket and procastinate all day?",
        a: "Yes, I do",
        b: "No, I am feeling super productive today",
        c: "I've trouble organising my tasks",
        d: "I want to work, but I'm feeling too lazy",
        correct: "b",
    },
    {
        question: "Do you feel socializing?",
        a: "Yes, I want to talk to people",
        b: "No, I'm not feeling social today",
        c: "I'm not sure, I'm want to socialize",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Are you optimistic about the future day?",
        a: "Yes, I am",
        b: "No, I'm not",
        c: "I'm not sure, I'm not sure if I'm optimistic",
        d: "None of the above",
        correct: "a",
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
           quiz.innerHTML = score==0?
           `
           <center><h2>Your mood is ${score} out of ${quizData.length}. Well let's enjoy the beautiful day! </h2>
           <h2  class="lgreen-col  font-bold box-shadow px-8 mb-4 py-2 mt-8 rounded-xl text-3xl  lg:w-1/4 w-2/3  fon font-semibold tracking-wide"
           style="box-shadow: 10px 10px #d6e4e5;">📺Watch this📺</h2>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/PppkNH3bKV4" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
           <h2  class="lgreen-col  font-bold box-shadow px-8 mb-4 py-2 mt-8 rounded-xl text-3xl lg:w-1/4 w-2/3  fon  font-semibold tracking-wide"
           style="box-shadow: 10px 10px #d6e4e5;">🎼Tune in🎼</h2>
           <iframe src="https://open.spotify.com/embed/playlist/3U8rwpKTffp9t0TDRPeqE1?utm_source=generator" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
           <button class="lgreen-col hover:bg-opacity-70 py-3 px-6 m-4 text-lg font-medium  rounded-xl invisible xl:visible ml-6" style="box-shadow: 10px 10px #d6e4e5;" onclick="location.reload()">Reload</button></center>
           `:score==1?        `
           <center><h2>Your mood is ${score} out of ${quizData.length}. Well let's enjoy the beautiful day! </h2>
    
           <h2  class="lgreen-col  font-bold box-shadow px-8 mb-4 py-2 mt-8 rounded-xl text-3xl  lg:w-1/4 w-2/3  fon font-semibold tracking-wide"
           style="box-shadow: 10px 10px #d6e4e5;">📺Watch this📺</h2>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/78nsxRxbf4w" frameborder="0" allowfullscreen></iframe>
           <h2  class="lgreen-col  font-bold box-shadow px-8 mb-4 py-2 mt-8 rounded-xl text-3xl lg:w-1/4 w-2/3  fon  font-semibold tracking-wide"
           style="box-shadow: 10px 10px #d6e4e5;">🎼Tune in🎼</h2>
           <iframe src="https://open.spotify.com/embed/playlist/5PMlgQxNovXtPDwwxlcsfy?utm_source=generator" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
           <button class="lgreen-col hover:bg-opacity-70 py-3 px-6 m-4 text-lg font-medium  rounded-xl invisible xl:visible ml-6" style="box-shadow: 10px 10px #d6e4e5;" onclick="location.reload()">Reload</button></center>
           `:score==2?  
            `
           <center><h2>Your mood is ${score} out of ${quizData.length}. Well let's enjoy the beautiful day! </h2>
    
           <h2  class="lgreen-col  font-bold box-shadow px-8 mb-4 py-2 mt-8 rounded-xl text-3xl  lg:w-1/4 w-2/3  fon font-semibold tracking-wide"
           style="box-shadow: 10px 10px #d6e4e5;">📺Watch this📺</h2>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/DODLEX4zzLQ" frameborder="0" allowfullscreen></iframe>
           <h2  class="lgreen-col  font-bold box-shadow px-8 mb-4 py-2 mt-8 rounded-xl text-3xl lg:w-1/4 w-2/3  fon  font-semibold tracking-wide"
           style="box-shadow: 10px 10px #d6e4e5;">🎼Tune in🎼</h2>
           <iframe src="https://open.spotify.com/embed/playlist/1n2nCzTHisEcwpnzGkdYV6?utm_source=generator" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
           <button class="lgreen-col hover:bg-opacity-70 py-3 px-6 m-4 text-lg font-medium  rounded-xl invisible xl:visible ml-6" style="box-shadow: 10px 10px #d6e4e5;" onclick="location.reload()">Reload</button></center>
           `:score==3?
            `
           <center><h2>Your mood is ${score} out of ${quizData.length}. Well let's enjoy the beautiful day! </h2>
    
           <h2  class="lgreen-col  font-bold box-shadow px-8 mb-4 py-2 mt-8 rounded-xl text-3xl  lg:w-1/4 w-2/3  fon font-semibold tracking-wide"
           style="box-shadow: 10px 10px #d6e4e5;">📺Watch this📺</h2>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/3cHRPWHuWw8" frameborder="0" allowfullscreen></iframe>
           <h2  class="lgreen-col  font-bold box-shadow px-8 mb-4 py-2 mt-8 rounded-xl text-3xl lg:w-1/4 w-2/3  fon  font-semibold tracking-wide"
           style="box-shadow: 10px 10px #d6e4e5;">🎼Tune in🎼</h2>
           <iframe src="https://open.spotify.com/embed/playlist/6Z6uprRI9AcbB3on3GZK0H?utm_source=generator" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
           <button class="lgreen-col hover:bg-opacity-70 py-3 px-6 m-4 text-lg font-medium  rounded-xl invisible xl:visible ml-6" style="box-shadow: 10px 10px #d6e4e5;" onclick="location.reload()">Reload</button></center>
           `:score==4?  
                  `
           <center><h2>Your mood is ${score} out of ${quizData.length}. Well let's enjoy the beautiful day! </h2>
    
           <h2  class="lgreen-col  font-bold box-shadow px-8 mb-4 py-2 mt-8 rounded-xl text-3xl  lg:w-1/4 w-2/3  fon font-semibold tracking-wide"
           style="box-shadow: 10px 10px #d6e4e5;">📺Watch this📺</h2>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/FinMGtpTud0" frameborder="0" allowfullscreen></iframe>
           <h2  class="lgreen-col  font-bold box-shadow px-8 mb-4 py-2 mt-8 rounded-xl text-3xl lg:w-1/4 w-2/3  fon  font-semibold tracking-wide"
           style="box-shadow: 10px 10px #d6e4e5;">🎼Tune in🎼</h2>
           <iframe src="https://open.spotify.com/embed/playlist/289UGBigctoFYoYIaTVm1A?utm_source=generator" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
           <button class="lgreen-col hover:bg-opacity-70 py-3 px-6 m-4 text-lg font-medium  rounded-xl invisible xl:visible ml-6" style="box-shadow: 10px 10px #d6e4e5;" onclick="location.reload()">Reload</button></center>
           `: 
           `
           <center><h2>Your mood is ${score} out of ${quizData.length}. Well let's enjoy the beautiful day! </h2>
    
           <h2  class="lgreen-col  font-bold box-shadow px-8 mb-4 py-2 mt-8 rounded-xl text-3xl  lg:w-1/4 w-2/3  fon font-semibold tracking-wide"
           style="box-shadow: 10px 10px #d6e4e5;">📺Watch this📺</h2>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/zPyg4N7bcHM" frameborder="0" allowfullscreen></iframe>
           <h2  class="lgreen-col  font-bold box-shadow px-8 mb-4 py-2 mt-8 rounded-xl text-3xl lg:w-1/4 w-2/3  fon  font-semibold tracking-wide"
           style="box-shadow: 10px 10px #d6e4e5;">🎼Tune in🎼</h2>
           <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC?utm_source=generator" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
           <button class="lgreen-col hover:bg-opacity-70 py-3 px-6 m-4 text-lg font-medium  rounded-xl invisible xl:visible ml-6" style="box-shadow: 10px 10px #d6e4e5;" onclick="location.reload()">Reload</button></center>
           `   
       }
    }
})
