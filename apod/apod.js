let apodApiUrl = 'https://apodapi.herokuapp.com/api/'

let apodImage = document.querySelector('#apod-image')
let apodDescription = document.querySelector('#apod-description')


fetch(apodApiUrl)
    .then( response => response.json()).then( data => {
        if (data.media_type === 'image') {
            let imgUrl = data.url
            apodImage.src = imgUrl
        }
        else if (data.media_type === 'video') {
            // todo display video 
        }
        else {
            // Um
        }

        let description = data.description
        apodDescription.innerHTML = description

    })
    .catch( err => {
        console.log(err)
    })