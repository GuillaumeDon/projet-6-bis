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
			const photographerCards = photographers.map(photographerData => {
				const photographerCard = new PhotographerCard(photographerData);
				const card = photographerCard.createCard();
				return card;
			});
	
			const photographerLinks = photographerCards.map(card => card.querySelector("a"));
	
			photographerLinks.forEach((link, index) => {
				link.setAttribute("tabindex", "0"); // Rend le lien focusable
	
				// Ajoute un écouteur d'événements "keydown" au lien
				link.addEventListener("keydown", (event) => {
					switch (event.key) {
					case "ArrowRight":
					case "ArrowDown":
						// Code pour se déplacer vers la droite ou vers le bas
						if (index < photographerLinks.length - 1) {
							photographerLinks[index + 1].focus();
						}
						break;
					case "ArrowLeft":
					case "ArrowUp":
						// Code pour se déplacer vers la gauche ou vers le haut
						if (index > 0) {
							photographerLinks[index - 1].focus();
						}
						break;
					default:
						// Code optionnel pour gérer d'autres touches
						break;
					}
				});
	
				this.photographersSection.appendChild(photographerCards[index]);
			});
		} else {
			console.error("Élément '.photographer_section' introuvable dans le DOM");
		}
	}}

document.addEventListener("DOMContentLoaded", () => {
	const gallery = new PhotographersGallery();
	gallery.displayPhotographers();
});
