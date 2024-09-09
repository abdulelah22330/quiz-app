const startBtn= document.getElementById('start-btn')
const nextBtn= document.getElementById('next-btn')
const questionContainer= document.getElementById
('question-container');
const questionElement= document.getElementById('question')
const answerBtns= document.getElementById('answer-btns')

let shuffledQuestions, currentQuestionIndex

startBtn.addEventListener('click', startGame)
nextBtn.addEventListener('click', ()=>{
    currentQuestionIndex++;
    setNextQuestion()
})



function startGame(){
    startBtn.classList.add('hide')

//     The compareFunction takes two arguments a and b:
// If the return value is negative, a is sorted before b.
// If the return value is positive, b is sorted before a.
// If the return value is 0, the order of a and b remains unchanged.
    shuffledQuestions= questions.sort(()=>{
        Math.random() - 0.5
    })
    currentQuestionIndex=0
    questionContainer.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}
function showQuestion(question){
    questionElement.innerText=question.question
    question.choices.forEach(choice=>{
        button= document.createElement('button')
        button.innerText=choice.text
        button.classList.add('btn')
        if(choice.correct){
            button.dataset.correct= choice.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBtns.appendChild(button)
    })

}
function resetState(){
    clearStatusClass(document.body)
    nextBtn.classList.add('hide')
    answerBtns.innerHTML=null
}
function selectAnswer(e){
    selectedButton= e.target
    const correct= e.target.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBtns.children).forEach(btn=>{
        setStatusClass(btn, btn.dataset.correct)
        btn.removeEventListener('click', selectAnswer)
        btn.addEventListener('click', ()=>{
            alert('You already chose an answer!')
        })
    })
    if(shuffledQuestions.length>currentQuestionIndex+1)
        nextBtn.classList.remove('hide')
    else{
        startBtn.innerText='Restart'
        startBtn.classList.remove('hide')
    }

}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }
    else{
        element.classList.add('wrong')

    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions=[
    {
        question:'What is 2x2?',
        choices:[
            {
                text: '4', correct: true
            },
            {
                text: '8', correct: false
            },
            {
                text: '2', correct: false
            },
            {
                text: '12', correct: false
            }  
        ]
    }
]


// To do: implement this app using OOP