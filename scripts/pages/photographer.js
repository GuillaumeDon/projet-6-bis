import { PhotographerCard } from '../factories/photographer.js';
import { MediaFactory } from '../factories/media.js';

class PhotographerPage {
    constructor() {
        this.photographerId = new URLSearchParams(window.location.search).get('id');
    }

    async getPhotographerData() {
        try {
            const response = await fetch('/data/photographers.json');
            const data = await response.json();
            this.photographer = data.photographers.find(p => p.id === parseInt(this.photographerId));
            this.media = data.media.filter(m => m.photographerId === parseInt(this.photographerId));
        } catch (error) {
            console.error("Erreur lors de la récupération des données du photographe:", error);
        }
    }

    displayPhotographerInfo() {
        if (this.photographer) {

            const photographerCard = new PhotographerCard(this.photographer);
            const card = photographerCard.createCardNoLink();
            document.querySelector('.photograph-header').appendChild(card);

         
            // const priceElement = document.createElement('p');
            // priceElement.textContent = `${this.photographer.price}€/jour`;
            // document.querySelector('.photograph-header').appendChild(priceElement);
        } else {
            console.error("Photographe non trouvé");
        }
    }

    displayPhotographerMedia() {
        if (this.media) {
            const mediaFactory = new MediaFactory();
            const mediaSection = document.querySelector('.photographer-media');
    
            // Clear existing media
            mediaSection.innerHTML = '';
    
            this.media.forEach(mediaItem => {
                const mediaElement = mediaFactory.createMedia(mediaItem);
                mediaSection.appendChild(mediaElement);
            });
        } else {
            console.error("Médias du photographe non trouvés");
        }
    }

    async init() {
        await this.getPhotographerData();
        this.displayPhotographerInfo();
        this.displayPhotographerMedia();
    
        document.getElementById('filtre').addEventListener('change', (event) => {
            this.sortMedia(event.target.value);
            this.displayPhotographerMedia();
        });
    }

    sortMedia(criteria) {
        switch(criteria) {
            case 'popularity':
                this.media.sort((a, b) => b.likes - a.likes);
                break;
            case 'date':
                this.media.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'title':
                this.media.sort((a, b) => a.title.localeCompare(b.title));
                break;
        }
    }


}

document.addEventListener('DOMContentLoaded', () => {
    const photographerPage = new PhotographerPage();
    photographerPage.init();
});
