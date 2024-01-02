// transformer en classe Lightbox

// variable de classe mediaList
// Passer les médias dans le constructeur

// ajouter eventlistener, à la fin instancier la classe, et rajouter les methode/eventListener

// let mediaList = [];
// let currentMediaIndex = 0;// ok





// function showPreviousMedia() {
//     if (currentMediaIndex > 0) {
//         currentMediaIndex--;
//         const media = mediaList[currentMediaIndex];
//         displaySlider(mediaUrl, mediaTitle);
//         console.log("click test gauche");
//     }
// }

// function showNextMedia() {
//     console.log("test début fonction");
//     if (currentMediaIndex < mediaList.length - 1) {
//         currentMediaIndex++;
//         const media = mediaList[currentMediaIndex];
//         displaySlider(mediaUrl, mediaTitle);
//         console.log("click test droite");
//         // console.log(mediaUrl, mediaTitle);
//     }
// }

// function displaySlider(mediaUrl, mediaTitle) {
//     const lightboxModal = document.getElementById('lightbox_modal');
//     lightboxModal.innerHTML = '';

//     let mediaElement;
//     if (mediaUrl.endsWith('.jpg') || mediaUrl.endsWith('.png')) {
//         mediaElement = document.createElement('img');
//         mediaElement.src = mediaUrl;
//     } else if (mediaUrl.endsWith('.mp4')) {
//         mediaElement = document.createElement('video');
//         mediaElement.src = mediaUrl;
//         mediaElement.controls = true;
//     }

//     if (mediaTitle) {
//         const titleElement = document.createElement('p');
//         titleElement.textContent = mediaTitle;
//         titleElement.classList.add('media-title');
//         lightboxModal.appendChild(titleElement);
//     }

//     if (mediaElement) {
//         lightboxModal.appendChild(mediaElement);
//     }

//     const leftArrow = document.createElement('span');
//     leftArrow.classList.add('left-arrow');
//     leftArrow.innerHTML = '&#60;';
//     // leftArrow.onclick = showPreviousMedia;
//     leftArrow.addEventListener('click', showPreviousMedia);

//     const rightArrow = document.createElement('span');
//     rightArrow.classList.add('right-arrow');
//     rightArrow.innerHTML = '&#62;';
//     // rightArrow.onclick = showNextMedia;
//     rightArrow.addEventListener('click', showPreviousMedia);

//     lightboxModal.appendChild(leftArrow);
//     lightboxModal.appendChild(rightArrow);
//     lightboxModal.style.display = 'block';






//     const closeButton = document.createElement('img');
//     closeButton.src = '../assets/icons/closeSlider.svg';
//     closeButton.classList.add('close-button');
//     closeButton.onclick = closeSlider;

//     lightboxModal.appendChild(closeButton);


// }

// function closeSlider() {
//     const modal = document.getElementById("lightbox_modal");
//     modal.style.display = "none";
// }




class Slider {
    constructor(mediaList) {
        this.mediaList = mediaList;
        this.currentMediaIndex = 0;
        this.displaySlider = this.displaySlider.bind(this);
        this.showPreviousMedia = this.showPreviousMedia.bind(this);
        this.showNextMedia = this.showNextMedia.bind(this);
        this.closeSlider = this.closeSlider.bind(this);
    }

    showPreviousMedia() {
        if (this.currentMediaIndex > 0) {
            this.currentMediaIndex--;
            const media = this.mediaList[this.currentMediaIndex];
            this.displaySlider(media.mediaUrl, media.mediaTitle);
            console.log("click test gauche");
        }
    }

    showNextMedia() {
        console.log("test début fonction");
        if (this.currentMediaIndex < this.mediaList.length - 1) {
            this.currentMediaIndex++;
            const media = this.mediaList[this.currentMediaIndex];
            this.displaySlider(media.mediaUrl, media.mediaTitle);
            console.log("click test droite");
        }
    }

    displaySlider(mediaUrl, mediaTitle) {
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
        leftArrow.addEventListener('click', this.showPreviousMedia);

        const rightArrow = document.createElement('span');
        rightArrow.classList.add('right-arrow');
        rightArrow.innerHTML = '&#62;';
        rightArrow.addEventListener('click', this.showNextMedia);

        lightboxModal.appendChild(leftArrow);
        lightboxModal.appendChild(rightArrow);
        lightboxModal.style.display = 'block';

        const closeButton = document.createElement('img');
        closeButton.src = '../assets/icons/closeSlider.svg';
        closeButton.classList.add('close-button');
        closeButton.onclick = this.closeSlider;

        lightboxModal.appendChild(closeButton);
    }

    closeSlider() {
        const modal = document.getElementById("lightbox_modal");
        modal.style.display = "none";
    }
}

export { Slider };
