
class PhotographerCard {
	constructor(photographer) {
		this.photographer = photographer;
	}

	createCard() {
		const article = document.createElement("article");

   
		const link = document.createElement("a");
		link.href = `photographer.html?id=${this.photographer.id}`;
		link.setAttribute("aria-label", ` ${this.photographer.name}`);


		link.appendChild(this.createImageElement());
		link.appendChild(this.createHeadingElement());


		article.appendChild(link);
		article.appendChild(this.createLocationElement());
		article.appendChild(this.createTaglineElement());
		article.appendChild(this.createPriceElement());

		return article;
	}

	createImageElement() {
		const img = document.createElement("img");
		img.setAttribute("src", `../assets/photographers/profils-picture/${this.photographer.portrait}`);
		img.setAttribute("alt", `${this.photographer.name}`);
		return img;
	}

	createHeadingElement() {
		const h2 = document.createElement("h2");
		h2.textContent = this.photographer.name;
		return h2;
	}

	createLocationElement() {
		const location = document.createElement("p");
		location.textContent = `${this.photographer.city}, ${this.photographer.country}`;
		location.className = "photographer-location";
		return location;
	}

	createTaglineElement() {
		const tagline = document.createElement("p");
		tagline.textContent = this.photographer.tagline;
		tagline.className = "photographer-tagline";
		return tagline;
	}

	createPriceElement() {
		const price = document.createElement("p");
		price.textContent = `${this.photographer.price}€/jour`;
		price.className = "photographer-price";
		return price;
	}





	createCardNoLink() {
		const divBio = document.createElement("div");
		divBio.classList.add("div-bio");
		const divPicture = document.createElement("div");
		divPicture.classList.add("div-picture");

		const btnContact =document.createElement("button");
		btnContact.classList.add("contact_button");
		btnContact.innerHTML ="<class=\"contact_button\" aria-label=\"Contact me\" onclick=\"displayModal()\">Contactez-moi";






		const headerPhotograph = document.createElement("div");
		headerPhotograph.classList.add("headerPhotograph");
		const img = document.createElement("img");
		img.classList.add("bio-picture");
		img.setAttribute("src", `../assets/photographers/profils-picture/${this.photographer.portrait}`);
		img.setAttribute("alt", `${this.photographer.name}`);
        
		const h2 = document.createElement("h2");
		h2.textContent = this.photographer.name;

		const location = document.createElement("p");
		location.textContent = `${this.photographer.city}, ${this.photographer.country}`;
		location.className = "photographer-location";

		const tagline = document.createElement("p");
		tagline.textContent = this.photographer.tagline;
		tagline.className = "photographer-tagline";

		// const price = document.createElement('p');
		// price.textContent = `${this.photographer.price}€/jour`;
		// price.className = 'photographer-price';
		headerPhotograph.appendChild(divBio);
		divBio.appendChild(h2);
		divBio.appendChild(location);
		divBio.appendChild(tagline);
		headerPhotograph.appendChild(btnContact);
		headerPhotograph.appendChild(divPicture);
		divPicture.appendChild(img);

		// article.appendChild(price);


		return headerPhotograph;
	}
}

export { PhotographerCard };
