class MediaFactory {
    createMedia(media) {
        if (media.image) {
            return this.createImage(media);
        } else if (media.video) {
            return this.createVideo(media);
        }
    }

    // createImage(media) {
    //     const img = document.createElement('img');
    //     img.src = `assets/medias/${media.photographerId}/${media.image}`;
    //     img.alt = media.title;
   
    //     return img;
    // }

    // createVideo(media) {
    //     const video = document.createElement('video');
    //     video.src = `assets/medias/${media.photographerId}/${media.video}`;
    //     video.setAttribute('controls', '');
    //     return video;
    // }


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
    
        // Assuming media.likes holds the number of likes
        const likes = document.createElement('span');
        likes.textContent = `${media.likes} likes`;
        container.appendChild(likes);

        const heart=document.createElement('img');
        heart.src = 'assets/images/like.png';
        heart.classList.add('heart');
        heart.addEventListener('click', () => this.toggleLike(media, likes));

        container.appendChild(heart);

    
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

        const heart=document.createElement('img');
        heart.src = 'assets/images/like.png';
        heart.classList.add('heart');
        heart.addEventListener('click', () => this.toggleLike(media, likes));

        container.appendChild(heart);

    
        return container;
    }

    //Déplacer dans les pages
    toggleLike(media, likesElement) {
        // Vérifie si le média a déjà été liké
        if (media.liked) {
            media.likes--;
            media.liked = false;
        } else {
            media.likes++;
            media.liked = true;
        }
    
        // Met à jour l'affichage des likes
        likesElement.textContent = `${media.likes} likes`;
    
        // Met à jour le fichier JSON (voir ci-dessous pour plus de détails)
        this.updateLikesInJson(media);
    }

    updateLikesInJson(media) {
        // Utiliser localStorage pour simuler la mise à jour du fichier JSON
        localStorage.setItem(`mediaLikes-${media.id}`, media.likes);
    }
    
}

export { MediaFactory };
