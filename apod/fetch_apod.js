// Fall 2026 - NASA retires APOD API and replaces with a new version.
// Currently this returns a list, while the documentation says it 
// returns an object representing today's APOD. 
let apodApiUrl = 'https://science.nasa.gov/wp-json/wp/v2/apod-basic'  

// Request 2025-10-07 for a "picture" of the day that returns a video. Not currently supported with new API?

let apodTitle = document.querySelector('#apod-title')
let apodExplanation = document.querySelector('#apod-explanation')
let apodImage = document.querySelector('#apod-image')
let apodVideo = document.querySelector('#apod-video')

fetch(apodApiUrl)
    .then( response => response.json() )
    .then( data => {
        console.log(data)
        // Get title, explanation, video/image URL from response data 

        data = data[0]

        let title = data.title 
        apodTitle.innerHTML = title 

        let explanation = data.explanation
        apodExplanation.innerHTML = explanation

        let mediaType = data.media_type 
        let url = data.hdurl 

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



