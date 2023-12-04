class PhotographerCard {
    constructor(photographer) {
        this.photographer = photographer;
    }

    createCard() {
        const article = document.createElement('article');

        // Création d'un lien cliquable pour chaque carte
        const link = document.createElement('a');
        link.href = `photographer.html?id=${this.photographer.id}`;
        link.setAttribute('aria-label', `Voir la page de ${this.photographer.name}`);

        // Ajout des éléments à 'link' au lieu de 'article'
        link.appendChild(this.createImageElement());
        link.appendChild(this.createHeadingElement());


        article.appendChild(link);
        article.appendChild(this.createLocationElement());
        article.appendChild(this.createTaglineElement());
        article.appendChild(this.createPriceElement());

        return article;
    }

    createImageElement() {
        const img = document.createElement('img');
        img.setAttribute('src', `../assets/photographers/profils-picture/${this.photographer.portrait}`);
        img.setAttribute('alt', `${this.photographer.name}`);
        return img;
    }

    createHeadingElement() {
        const h2 = document.createElement('h2');
        h2.textContent = this.photographer.name;
        return h2;
    }

    createLocationElement() {
        const location = document.createElement('p');
        location.textContent = `${this.photographer.city}, ${this.photographer.country}`;
        location.className = 'photographer-location';
        return location;
    }

    createTaglineElement() {
        const tagline = document.createElement('p');
        tagline.textContent = this.photographer.tagline;
        tagline.className = 'photographer-tagline';
        return tagline;
    }

    createPriceElement() {
        const price = document.createElement('p');
        price.textContent = `${this.photographer.price}€/jour`;
        price.className = 'photographer-price';
        return price;
    }
}

export { PhotographerCard };
