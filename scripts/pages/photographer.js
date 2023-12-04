class PhotographerPage {
    constructor() {
        this.photographerId = new URLSearchParams(window.location.search).get('id');
    }

    async getPhotographerData() {
        const response = await fetch('../data/photographers.json');
        const data = await response.json();
        return data.photographers.find(p => p.id === parseInt(this.photographerId));
    }

    async displayPhotographer() {
        const photographer = await this.getPhotographerData();
        if (photographer) {
            console.log(photographer); // Pour tester, afficher les données dans la console
            // Logique pour afficher les données du photographe sur la page
        } else {
            console.error("Photographe non trouvé");
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const photographerPage = new PhotographerPage();
    photographerPage.displayPhotographer();
});
