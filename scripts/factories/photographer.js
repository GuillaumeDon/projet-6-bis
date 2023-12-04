class PhotographerCard {
    constructor(photographer) {
        this.photographer = photographer;
    }

    createCard() {
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute('src', `../assets/photographers/${this.photographer.portrait}`);
        img.setAttribute('alt', `${this.photographer.name}`);
        const h2 = document.createElement('h2');
        h2.textContent = this.photographer.name;

        const location = document.createElement('p');
        location.textContent = `${this.photographer.city}, ${this.photographer.country}`;
        location.className = 'photographer-location';

        const tagline = document.createElement('p');
        tagline.textContent = this.photographer.tagline;
        tagline.className = 'photographer-tagline';

        const price = document.createElement('p');
        price.textContent = `${this.photographer.price}€/jour`;
        price.className = 'photographer-price';
        
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(tagline);
        article.appendChild(price);

        return article;
    }
}

export { PhotographerCard };
