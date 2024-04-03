class Slider {
	mediaList;
	currentIndex;
	lightboxModal;

	constructor(mediaList) {
		this.mediaList = mediaList;
		this.currentIndex = 0;
		this.lightboxModal = document.getElementById("lightbox_modal");
		this.lightboxModal.setAttribute("aria-hidden", "image close up view");
		this.lightboxModal.setAttribute("role", "dialog");
		this.lightboxModal.tabIndex = -1;
		this.handleKeyDown = this.handleKeyDown.bind(this);

	}

	showPreviousMedia() {
		let prevIndex;
		if (this.currentIndex > 0) {
			prevIndex = this.currentIndex - 1;
		} else {
			prevIndex = this.mediaList.length - 1;
		}
		const prevMediaTitle = this.mediaList[prevIndex].title;
	
		const leftArrow = document.querySelector(".left-arrow");
		leftArrow.setAttribute("aria-label", "Previous image: " + prevMediaTitle);
	
		this.currentIndex = prevIndex;
		this.displaySlider(this.mediaList[this.currentIndex]);
	}

	showNextMedia() {
		let nextIndex;
		if (this.currentIndex < this.mediaList.length - 1) {
			nextIndex = this.currentIndex + 1;
		} else {
			nextIndex = 0;
		}
		const nextMediaTitle = this.mediaList[nextIndex].title;
	
		const rightArrow = document.querySelector(".right-arrow");
		rightArrow.setAttribute("aria-label", "Next image: " + nextMediaTitle);
	
		this.currentIndex = nextIndex;
		this.displaySlider(this.mediaList[this.currentIndex]);
	}

	setCurrentIndex(currentIndex) {
		this.currentIndex = currentIndex;
	}

	displaySlider(media) {
		let mediaUrl;
		
		if (media.image) {
			mediaUrl = `assets/medias/${media.photographerId}/${media.image}`;
		} else {
			mediaUrl = `assets/medias/${media.photographerId}/${media.video}`;
		}
		let mediaTitle = media.title;

		const lightboxModal = document.getElementById("lightbox_modal");
		lightboxModal.innerHTML = "";

		let mediaElement;
		if (mediaUrl.endsWith(".jpg") || mediaUrl.endsWith(".png")) {
			mediaElement = document.createElement("img");
			mediaElement.src = mediaUrl;
		} else if (mediaUrl.endsWith(".mp4")) {
			mediaElement = document.createElement("video");
			mediaElement.src = mediaUrl;
			mediaElement.controls = true;
		}

		if (mediaTitle) {
			const titleElement = document.createElement("p");
			titleElement.textContent = mediaTitle;
			titleElement.classList.add("media-title");
			lightboxModal.appendChild(titleElement);
			this.lightboxModal.setAttribute("aria-label", `Close-up view of ${mediaTitle}`);

		}

		if (mediaElement) {
			lightboxModal.appendChild(mediaElement);
		}

		const leftArrow = document.createElement("span");
		leftArrow.classList.add("left-arrow");
		leftArrow.innerHTML = "&#60;";
		leftArrow.setAttribute("aria-label", "Previous image");
		leftArrow.addEventListener("click", this.showPreviousMedia.bind(this));

		const rightArrow = document.createElement("span");
		rightArrow.classList.add("right-arrow");
		rightArrow.innerHTML = "&#62;";
		rightArrow.setAttribute("aria-label", "Next image");
		rightArrow.addEventListener("click", this.showNextMedia.bind(this));

		lightboxModal.appendChild(leftArrow);
		lightboxModal.appendChild(rightArrow);
		lightboxModal.style.display = "block";

		const closeButton = document.createElement("img");
		closeButton.src = "assets/images/closeLightbox.png";
		closeButton.alt="Close dialog";
		closeButton.classList.add("close-button");
		closeButton.onclick = this.closeSlider.bind(this);

		lightboxModal.appendChild(closeButton);

		// Ajout de la navigation clavier quand le slider est affiché
		
		document.addEventListener("keydown", this.handleKeyDown);

	}

	handleKeyDown(event) {
		switch (event.key) {
		case "ArrowLeft":
			this.showPreviousMedia();
			break;
		case "ArrowRight":
			this.showNextMedia();
			break;
		case "Escape":
			this.closeSlider();
			break;
		default:
			break;
		}
	}

	closeSlider() {
		const modal = document.getElementById("lightbox_modal");
		modal.style.display = "none";
		modal.setAttribute("aria-hidden", "true");

		// Supprime la navigation clavier quand le slider est affiché
		// document.removeEventListener("keydown", this.handleKeyDown.bind(this));
		document.removeEventListener("keydown", this.handleKeyDown);

	}
}

export { Slider };