// API documentation: https://8ball.delegator.com
const magic8BallUrl = 'https://8ball.delegator.com/magic/JSON/'

let askQuestionButton = document.querySelector('#ask-question')
let questionInput = document.querySelector('#question')

let answerDisplayEl = document.querySelector('#answer')
let errorDisplayEl = document.querySelector('#error')


askQuestionButton.addEventListener('click', submitQuestion)


document.addEventListener('keyup', function(ev) {
    if (ev.key === 'Enter' || ev.keyCode === 13) {
        submitQuestion()
    }
})


questionInput.addEventListener('keyup', function() {
    // Remove the previous answer
    answerDisplayEl.style.opacity = "0"
})


function submitQuestion() {
    
    // Clear any previous answer or error 
    answerDisplayEl.innerHTML = ''
    errorDisplayEl.innerHTML = ''

    let question = questionInput.value 

    // No question? Ignore.
    if (!question) {
        return 
    }

    // Encode question - replace special characters with codes 
    // so that spaces and ? etc. can be sent as part of the URL
    let questionEncoded = encodeURIComponent(question)

    // Add the question to the end of the URL. 
    let url = magic8BallUrl + questionEncoded
    
    fetch(url)
        .then( resp =>  resp.json())
        .then( response => {
            answer = response.magic.answer 
            answerDisplayEl.innerHTML = answer
            answerDisplayEl.style.opacity = 1
        })
        .catch( err => {
            console.log(err)
            errorDisplayEl.innerHTML = 'Your question cannot be answered today'
        })
}



