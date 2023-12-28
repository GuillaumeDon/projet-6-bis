// let currentMediaIndex = 0;
// const mediaList = [];




function displaySlider(mediaUrl, mediaTitle) {
    const lightboxModal = document.getElementById('lightbox_modal');
    lightboxModal.innerHTML = '';

    let mediaElement;
    if (mediaUrl.endsWith('.jpg') || mediaUrl.endsWith('.png')) {
        mediaElement = document.createElement('img');
        mediaElement.src = mediaUrl;
    } else if (mediaUrl.endsWith('.mp4')) {
        mediaElement = document.createElement('video');
        mediaElement.src = mediaUrl;
        mediaElement.controls = true;
    }


    if (mediaTitle) {
        const titleElement = document.createElement('p');
        titleElement.textContent = mediaTitle;
        titleElement.classList.add('media-title');
        lightboxModal.appendChild(titleElement);
    }

    if (mediaElement) {
        lightboxModal.appendChild(mediaElement);
    }



    const leftArrow = document.createElement('span');
    leftArrow.classList.add('left-arrow');
    leftArrow.innerHTML = '&#60;'; 
    leftArrow.onclick = function() { };

    const rightArrow = document.createElement('span');
    rightArrow.classList.add('right-arrow');
    rightArrow.innerHTML = '&#62;'; 
    rightArrow.onclick = function() { };

    lightboxModal.appendChild(leftArrow);
    lightboxModal.appendChild(rightArrow);
    lightboxModal.style.display = 'block';
}

function closeSlider() {
    const modal = document.getElementById("lightbox_modal");
    modal.style.display = "none";
}


// document.querySelector('#contact_modal form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const firstName = document.getElementById('first-name').value;
//     const lastName = document.getElementById('last-name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     console.log('Prénom:', firstName);
//     console.log('Nom:', lastName);
//     console.log('Email:', email);
//     console.log('Message:', message);

// });
