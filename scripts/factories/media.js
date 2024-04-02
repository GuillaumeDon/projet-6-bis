

import { Slider } from "../utils/slider.js";

class MediaFactory {
	constructor() {
		this.slider = new Slider(this.mediaList); // Créer une instance de Slider avec mediaList
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

		const container = document.createElement("div");
		container.classList.add("media-container");

		const img = document.createElement("img");
		img.src = `assets/medias/${media.photographerId}/${media.image}`;
		img.alt = media.title;
		img.tabIndex = 0; // Ajoutez cette ligne

		container.appendChild(img);


		const legend = document.createElement("div");
		legend.classList.add("media-legend");
		container.appendChild(legend);




		const title = document.createElement("p");
		title.textContent = media.title;
		legend.appendChild(title);

		const legendLike = document.createElement("div");
		legendLike.classList.add("media-legend-likes");
		legend.appendChild(legendLike);


		const likes = document.createElement("span");
		likes.textContent = `${media.likes} likes`;
		legendLike.appendChild(likes);

		const heart = document.createElement("img");
		heart.src = "assets/images/like.png";
		heart.alt = "likes";
		heart.classList.add("heart");

		// Ajoutez un gestionnaire d'événements pour empêcher la propagation de l'événement click
		heart.addEventListener("click", (event) => {
			event.stopPropagation();
			this.toggleLike(media, likes);
		});



		legendLike.appendChild(heart);


		return container;
	}

	createVideo(media) {
		const container = document.createElement("div");
		container.classList.add("media-container");

		const video = document.createElement("video");
		video.src = `assets/medias/${media.photographerId}/${media.video}`;
		video.alt = media.title;
		video.tabIndex = 0; // Ajoutez cette ligne

		video.setAttribute("controls", "");
		container.appendChild(video);

		const legend = document.createElement("div");
		legend.classList.add("media-legend");
		container.appendChild(legend);


		const title = document.createElement("p");
		title.textContent = media.title;
		legend.appendChild(title);


		const legendLike = document.createElement("div");
		legendLike.classList.add("media-legend-likes");
		legend.appendChild(legendLike);


		const likes = document.createElement("span");
		likes.textContent = `${media.likes} likes`;
		legendLike.appendChild(likes);

		const heart = document.createElement("img");
		heart.src = "assets/images/like.png";
		heart.alt = "likes";
		heart.classList.add("heart");

		// Ajoutez un gestionnaire d'événements pour empêcher la propagation de l'événement click
		heart.addEventListener("click", (event) => {
			event.stopPropagation();
			this.toggleLike(media, likes);
		});

		legendLike.appendChild(heart);

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



export { MediaFactory };
