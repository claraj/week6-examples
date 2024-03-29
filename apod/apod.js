let apodApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
 
let apodImage = document.querySelector('#apod-image')
let apodVideo = document.querySelector('#apod-video')
let apodDescription = document.querySelector('#apod-description')


fetch(apodApiUrl)
    .then( response => response.json()).then( data => {

        // Display the media. It could be an image or a video. 
        if (data.media_type === 'image') {
            let imgUrl = data.url
            apodImage.src = imgUrl
            apodImage.style.display = 'block'
        }
        else if (data.media_type === 'video') {
            let videoUrl = data.url
            apodVideo.src = videoUrl
            apodVideo.style.display = 'block'
        }
        else {
            // What other types could there be?
        }

        // Display description - which may also be in the explanation property. 
        let description = data.description
        let explanation = data.explanation

        if (description) {
            apodDescription.innerHTML = description
        } 
        else if (explanation) {
            apodDescription.innerHTML = explanation
        }
        else {
            apodDescription.innerHTML = 'No description available'
        }
    })
    .catch( err => {
        console.log(err)
    })