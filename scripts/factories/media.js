class MediaFactory {
    createMedia(media) {
        if (media.type === 'image') {
            return this.createImage(media);
        } else if (media.type === 'video') {
            return this.createVideo(media);
        }
    }

    createImage(media) {
        const img = document.createElement('img');
        img.src = `../assets/photographers/medias/${media.photographerId}/${media.src}`;
        img.alt = media.title;
        return img;
    }

    createVideo(media) {
        const video = document.createElement('video');
        video.src = `../assets/photographers/medias/${media.photographerId}/${media.src}`;
        return video;
    }
}

export { MediaFactory };
