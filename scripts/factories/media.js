class MediaFactory {
    createMedia(media) {
        if (media.image) {
            return this.createImage(media);
        } else if (media.video) {
            return this.createVideo(media);
        }
    }

    createImage(media) {
        const img = document.createElement('img');
        img.src = `assets/medias/${media.photographerId}/${media.image}`;
        img.alt = media.title;
   
        return img;
    }

    createVideo(media) {
        const video = document.createElement('video');
        video.src = `assets/medias/${media.photographerId}/${media.video}`;
        video.setAttribute('controls', '');
        return video;
    }
}

export { MediaFactory };
