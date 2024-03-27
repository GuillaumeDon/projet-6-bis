import { PhotographerCard } from "../factories/photographer.js";


class PhotographersGallery {
	constructor() {
		this.photographersSection = document.querySelector(".photographer_section");
	}

	async getPhotographers() {
		try {
			const response = await fetch("../data/photographers.json");
			const data = await response.json();
			return data.photographers;
		} catch (error) {
			console.error("Erreur lors de la récupération des photographes:", error);
		}
	}

	async displayPhotographers() {
		const photographers = await this.getPhotographers();
		if (this.photographersSection) {
			photographers.forEach(photographerData => {
				const photographerCard = new PhotographerCard(photographerData);
				const card = photographerCard.createCard();
				this.photographersSection.appendChild(card);
			});
		} else {
			console.error("Élément '.photographer_section' introuvable dans le DOM");
		}
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const gallery = new PhotographersGallery();
	gallery.displayPhotographers();
});
