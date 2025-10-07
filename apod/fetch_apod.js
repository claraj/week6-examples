// This is a video but it's embedded on another page so there will be an error. 
//let apodApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=jm0xmpacmNMHs0LPMlo3g6yEexrExKeyFd4rKLqk&date=2025-03-02'
// this is also a video, the URL is a YouTube link
// let apodApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=jm0xmpacmNMHs0LPMlo3g6yEexrExKeyFd4rKLqk&date=2020-01-21'

let apodApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

let apodTitle = document.querySelector('#apod-title')
let apodExplanation = document.querySelector('#apod-explanation')
let apodImage = document.querySelector('#apod-image')
let apodVideo = document.querySelector('#apod-video')

fetch(apodApiUrl)
    .then( response => {
        if (response.status == 200) {
            return response.json()
        } else {
            throw new Error('Error from APOD call ')
        }
    })
    .then( data => {

        // Display explanation 
        let explanation = data.explanation
        apodExplanation.innerHTML = explanation

        // Display title 
        let title = data.title 
        apodTitle.innerHTML = title

        // Display the media. It could be an image or a video. 
        if (data.media_type === 'image') {
            let imgUrl = data.url
            apodImage.src = imgUrl
            apodImage.style.display = 'block'  // show the image 
        }
        else if (data.media_type === 'video') {
            let videoUrl = data.url
            apodVideo.src = videoUrl
            apodVideo.style.display = 'block'  // or, embed and show the video
            // Note that some videos URLs will embed correctly, but other
            // video URLs may be links to HTML pages with videos on, or other video-like objects
            // and will not work correctly. 
        }
        else {
            // TODO - find out if there are other media types
        }

    })
    .catch( err => {
        console.log(err)
        apodExplanation.innerHTML = 'Sorry, could not fetch today\'s astronomy picture.'
    })