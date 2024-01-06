// import { Slider } from './utils/Slider';

// class MediaFactory {
//     createMedia(media) {
//         if (media.image) {
//             return this.createImage(media);
//         } else if (media.video) {
//             return this.createVideo(media);
//         }
//     }



//     createImage(media) {
//         const container = document.createElement('div');
//         container.classList.add('media-container');
    
//         const img = document.createElement('img');
//         img.src = `assets/medias/${media.photographerId}/${media.image}`;
//         img.alt = media.title;
//         container.appendChild(img);
    
//         const title = document.createElement('p');
//         title.textContent = media.title;
//         container.appendChild(title);
    
//         // Assuming media.likes holds the number of likes
//         const likes = document.createElement('span');
//         likes.textContent = `${media.likes} likes`;
//         container.appendChild(likes);

//         const heart=document.createElement('img');
//         heart.src = 'assets/images/like.png';
//         heart.classList.add('heart');
//         heart.addEventListener('click', () => this.toggleLike(media, likes));

//         container.appendChild(heart);
        

//         //Event clique sur une image
//         // img.addEventListener("click", ()=>{
//         //     displaySlider(imageUrl);
            
//         //     console.log('test image clique');
//         // })
//         img.addEventListener("click", () => {
//             const mediaTitle = media.title;
//             displaySlider(`assets/medias/${media.photographerId}/${media.image}`,mediaTitle);
//         });
        


    
//         return container;
//     }

//     createVideo(media) {
//         const container = document.createElement('div');
//         container.classList.add('media-container');
    
//         const video = document.createElement('video');
//         video.src = `assets/medias/${media.photographerId}/${media.video}`;
//         video.alt = media.title;
//         video.setAttribute('controls', '');
        
//         container.appendChild(video);
    
//         const title = document.createElement('p');
//         title.textContent = media.title;
//         container.appendChild(title);
    
     
//         const likes = document.createElement('span');
//         likes.textContent = `${media.likes} likes`;
//         container.appendChild(likes);

//         const heart=document.createElement('img');
//         heart.src = 'assets/images/like.png';
//         heart.classList.add('heart');
//         heart.addEventListener('click', () => this.toggleLike(media, likes));

//         container.appendChild(heart);

//                 //Event clique sur une image
//                 // video.addEventListener("click", ()=>{
//                 //     displaySlider(imageUrl);
//                 //     console.log('test video clique');
//                 // })

//                 video.addEventListener("click", () => {
//                     const mediaTitle = media.title;
//                     displaySlider(`assets/medias/${media.photographerId}/${media.video}`, mediaTitle);
//                 });
                
        
    
//         return container;
//     }

//     //Déplacer dans les pages
//     toggleLike(media, likesElement) {
//         // Vérifie si le média a déjà été liké
//         if (media.liked) {
//             media.likes--;
//             media.liked = false;
//         } else {
//             media.likes++;
//             media.liked = true;
//         }
    
//         // Met à jour l'affichage des likes
//         likesElement.textContent = `${media.likes} likes`;
    
//         // Met à jour le fichier JSON (voir ci-dessous pour plus de détails)
//         this.updateLikesInJson(media);
//     }

//     updateLikesInJson(media) {
//         // Utiliser localStorage pour simuler la mise à jour du fichier JSON
//         localStorage.setItem(`mediaLikes-${media.id}`, media.likes);
//     }
    


   

// }
// const slider = new Slider();

// export { MediaFactory };




import { Slider } from '../utils/slider.js';

class MediaFactory {
    constructor() {
        this.slider = new Slider(this.mediaList); // Créez une instance de Slider avec mediaList
        this.mediaList = [];
    }

    createMedia(media) {
        if (media.image) {
            return this.createImage(media);
        } else if (media.video) {
            return this.createVideo(media);
        }
    }

    createImage(media) {
        const container = document.createElement('div');
        container.classList.add('media-container');

        const img = document.createElement('img');
        img.src = `assets/medias/${media.photographerId}/${media.image}`;
        img.alt = media.title;
        container.appendChild(img);

        const title = document.createElement('p');
        title.textContent = media.title;
        container.appendChild(title);

        const likes = document.createElement('span');
        likes.textContent = `${media.likes} likes`;
        container.appendChild(likes);

        const heart = document.createElement('img');
        heart.src = 'assets/images/like.png';
        heart.classList.add('heart');
        heart.addEventListener('click', () => this.toggleLike(media, likes));
        container.appendChild(heart);

        img.addEventListener("click", () => {
            const mediaTitle = media.title;
            this.slider.displaySlider(`assets/medias/${media.photographerId}/${media.image}`, mediaTitle); // Utilisez this.slider pour appeler displaySlider
        });

        return container;
    }

    createVideo(media) {
        const container = document.createElement('div');
        container.classList.add('media-container');

        const video = document.createElement('video');
        video.src = `assets/medias/${media.photographerId}/${media.video}`;
        video.alt = media.title;
        video.setAttribute('controls', '');
        container.appendChild(video);

        const title = document.createElement('p');
        title.textContent = media.title;
        container.appendChild(title);

        const likes = document.createElement('span');
        likes.textContent = `${media.likes} likes`;
        container.appendChild(likes);

        const heart = document.createElement('img');
        heart.src = 'assets/images/like.png';
        heart.classList.add('heart');
        heart.addEventListener('click', () => this.toggleLike(media, likes));
        container.appendChild(heart);

        video.addEventListener("click", () => {
            const mediaTitle = media.title;
            this.slider.displaySlider(`assets/medias/${media.photographerId}/${media.video}`, mediaTitle); // Utilisez this.slider pour appeler displaySlider
        });

        return container;
    }

    toggleLike(media, likesElement) {
        if (media.liked) {
            media.likes--;
            media.liked = false;
        } else {
            media.likes++;
            media.liked = true;
        }

        likesElement.textContent = `${media.likes} likes`;

        this.updateLikesInJson(media);
    }

    updateLikesInJson(media) {
        localStorage.setItem(`mediaLikes-${media.id}`, media.likes);
    }
}

const mediaFactory = new MediaFactory();
const mediaSection = document.querySelector('.photographer-media');
const mediaList = mediaFactory.mediaList; 

mediaSection.innerHTML = '';
mediaList.forEach(mediaItem => {
    const mediaElement = mediaFactory.createMedia(mediaItem);
    mediaSection.appendChild(mediaElement);
});

export { MediaFactory };
