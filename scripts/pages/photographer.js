

import { PhotographerCard } from '../factories/photographer.js';
import { MediaFactory } from '../factories/media.js';
import { Slider } from '../utils/slider.js';

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
        } else {
            console.error("Photographe non trouvé");
        }
    }

    displayPhotographerMedia() {
        if (this.media) {
            const mediaFactory = new MediaFactory();
            const mediaSection = document.querySelector('.photographer-media');
            const slider = new Slider(this.media);

            mediaSection.innerHTML = '';

            this.media.forEach((mediaItem, index) => {
                const mediaElement = mediaFactory.createMedia(mediaItem);
                mediaSection.appendChild(mediaElement);
                mediaElement.addEventListener("click", () => {
                    slider.setCurrentIndex(index);
                    slider.displaySlider(mediaItem);
                });
            });
        } else {
            console.error("Médias du photographe non trouvés");
        }
    }

    displayLikesAndPrice() {
        const totalLikes = this.media.reduce((sum, mediaItem) => sum + mediaItem.likes, 0);
        document.querySelector('.counter-like').innerHTML = `<div class="counter-like-number">
            ${totalLikes} <img class="heart" src="assets/images/blackheart.png">
            </div>
            <div class="counter-like-price">
            ${this.photographer.price}€ /jour
            </div>`;
    }

    async init() {
        await this.getPhotographerData();
        this.displayPhotographerInfo();
        this.displayPhotographerMedia();
        this.displayLikesAndPrice();

        document.querySelector('.dropdown-content').addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                const criteria = event.target.getAttribute('data-value');
                this.sortMedia(criteria);
                this.displayPhotographerMedia();
                
                // Mettre à jour le libellé du bouton avec l'option sélectionnée
                document.querySelector('.dropbtn').textContent = event.target.textContent;
            }
        });
    }

    sortMedia(criteria) {
        switch (criteria) {
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
