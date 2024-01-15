

// class Slider {

//     mediaList;
//     currentIndex;

//    constructor(mediaList){
//        this.mediaList = mediaList;
//     //    console.log(this.mediaList)
//     //TEST
//     this.currentIndex = 0;
    
//     document.addEventListener('keydown', this.handleKeyDown.bind(this));
//    }


//    showPreviousMedia() {
//     if(this.currentIndex < this.mediaList.length){
//         this.currentIndex--;
//     }else{
//         this.currentIndex = 0;
//     }
//     this.displaySlider(this.mediaList[this.currentIndex]) 
//    }

//    showNextMedia() {
//        if(this.currentIndex < this.mediaList.length - 1){
//            this.currentIndex++;
//        }else{
//            this.currentIndex = 0;
//        }
//        this.displaySlider(this.mediaList[this.currentIndex]) //since we are passing the entire object to the displaySlider methode, we only need the index to get the current media from the mediaList array
//    }

//    //this methode allows us to get the index of a given media when opening the ligtbox
//    setCurrentIndex(currentIndex){
//        this.currentIndex = currentIndex;
//    }

//    displaySlider(media) { 
//        //passation de tout l'object media au lieu de passer l'URL et title
//        let mediaUrl;
//         //verification de l'existance de la propiete image / video
//        if(media.image){
//            mediaUrl = `assets/medias/${media.photographerId}/${media.image}`; 
//        }else{
//            mediaUrl = `assets/medias/${media.photographerId}/${media.video}`; 
//        }
//        let mediaTitle = media.title;
//        const lightboxModal = document.getElementById('lightbox_modal');
//        lightboxModal.innerHTML = '';

//        let mediaElement;
//        if (mediaUrl.endsWith('.jpg') || mediaUrl.endsWith('.png')) {
//            mediaElement = document.createElement('img');
//            mediaElement.src = mediaUrl;
//        } else if (mediaUrl.endsWith('.mp4')) {
//            mediaElement = document.createElement('video');
//            mediaElement.src = mediaUrl;
//            mediaElement.controls = true;
//        }

//        if (mediaTitle) {
//            const titleElement = document.createElement('p');
//            titleElement.textContent = mediaTitle;
//            titleElement.classList.add('media-title');
//            lightboxModal.appendChild(titleElement);
//        }

//        if (mediaElement) {
//            lightboxModal.appendChild(mediaElement);
//        }

//        const leftArrow = document.createElement('span');
//        leftArrow.classList.add('left-arrow');
//        leftArrow.innerHTML = '&#60;';
//        leftArrow.addEventListener('click', this.showPreviousMedia.bind(this));

//        const rightArrow = document.createElement('span');
//        rightArrow.classList.add('right-arrow');
//        rightArrow.innerHTML = '&#62;';
//        rightArrow.addEventListener('click', this.showNextMedia.bind(this)); //we use bind(this) to ensure that there is no conflict between 'this' in the eventListener level and the class level

//        lightboxModal.appendChild(leftArrow);
//        lightboxModal.appendChild(rightArrow);
//        lightboxModal.style.display = 'block';

//        const closeButton = document.createElement('img');
//        closeButton.src = 'assets/icons/closeSlider.svg';
//        closeButton.classList.add('close-button');
//        closeButton.onclick = this.closeSlider;

//        lightboxModal.appendChild(closeButton);







       
//    }


//    handleKeyDown(event) {
//     switch (event.key) {
//         case 'ArrowLeft':
//             this.showPreviousMedia();
//             break;
//         case 'ArrowRight':
//             this.showNextMedia();
//             break;
//         case 'Escape':
//             this.closeSlider();
//             break;
//         default:
//             break;
//     }
// }

//    closeSlider() {
//        const modal = document.getElementById("lightbox_modal");
//        modal.style.display = "none";
//    }
// }

// export { Slider };


class Slider {
    mediaList;
    currentIndex;
    lightboxModal;

    constructor(mediaList) {
        this.mediaList = mediaList;
        this.currentIndex = 0;
        this.lightboxModal = document.getElementById('lightbox_modal');
        this.lightboxModal.setAttribute('aria-hidden', 'true');
        this.lightboxModal.setAttribute('role', 'dialog');
        this.lightboxModal.tabIndex = -1;

        document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    showPreviousMedia() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        } else {
            this.currentIndex = this.mediaList.length - 1;
        }
        this.displaySlider(this.mediaList[this.currentIndex]);
    }

    showNextMedia() {
        if (this.currentIndex < this.mediaList.length - 1) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0;
        }
        this.displaySlider(this.mediaList[this.currentIndex]);
    }

    setCurrentIndex(currentIndex) {
        this.currentIndex = currentIndex;
    }

    displaySlider(media) {
        let mediaUrl;
        if (media.image) {
            mediaUrl = `assets/medias/${media.photographerId}/${media.image}`;
        } else {
            mediaUrl = `assets/medias/${media.photographerId}/${media.video}`;
        }
        let mediaTitle = media.title;

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
        leftArrow.addEventListener('click', this.showPreviousMedia.bind(this));

        const rightArrow = document.createElement('span');
        rightArrow.classList.add('right-arrow');
        rightArrow.innerHTML = '&#62;';
        rightArrow.addEventListener('click', this.showNextMedia.bind(this));

        lightboxModal.appendChild(leftArrow);
        lightboxModal.appendChild(rightArrow);
        lightboxModal.style.display = 'block';

        const closeButton = document.createElement('img');
        closeButton.src = 'assets/icons/closeSlider.svg';
        closeButton.classList.add('close-button');
        closeButton.onclick = this.closeSlider;

        lightboxModal.appendChild(closeButton);
    }

    handleKeyDown(event) {
        switch (event.key) {
            case 'ArrowLeft':
                this.showPreviousMedia();
                break;
            case 'ArrowRight':
                this.showNextMedia();
                break;
            case 'Escape':
                this.closeSlider();
                break;
            default:
                break;
        }
    }

    closeSlider() {
        const modal = document.getElementById("lightbox_modal");
        modal.style.display = "none";
        modal.setAttribute('aria-hidden', 'true');
    }
}

export { Slider };
