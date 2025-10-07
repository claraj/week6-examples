let apodApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

// Request for a "picture" of the day that returns a video 
//let apodApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-01-21'

let apodTitle = document.querySelector('#apod-title')
let apodExplanation = document.querySelector('#apod-explanation')
let apodImage = document.querySelector('#apod-image')
let apodVideo = document.querySelector('#apod-video')

fetch(apodApiUrl)
    .then( response => response.json() )
    .then( data => {
        console.log(data)
        // Get title, explanation, video/image URL from response data 

        let title = data.title 
        apodTitle.innerHTML = title 

        let explanation = data.explanation
        apodExplanation.innerHTML = explanation

        let mediaType = data.media_type 
        let url = data.url 

        if (mediaType === 'image') {
            apodImage.src = url 
            apodImage.style.display = 'block'
        }
        else if (mediaType === 'video') {
            apodVideo.src = url
            apodVideo.style.display = 'block'
        } 
        else {
            // TODO - how to handle another media type? 
        }
        
    })
    .catch( err => {
        console.log(err)
        apodExplanation.innerHTML = 'Sorry, could not fetch today\'s astronomy picture.'
    })



