class Card {
    constructor(imageLink, name, templateClass) {
        this.image = imageLink;
        this.name = name;
        this.template = templateClass;
    }

    createCard() {
        const cardElement = document
            .querySelector(this.template)
            .content.querySelector('.card')
            .cloneNode(true)

        this.cardImage = cardElement.querySelector(".card__image");
        this.cardImage.src = this.image;
        this.cardImage.alt = this.name;

        this.cardTitle = cardElement.querySelector(".card__title");
        this.cardTitle.textContent = this.name;

        this.likeButton = cardElement.querySelector('.card__button-like');
        this.likeButton.addEventListener('click', () => {
            this.likeButton.classList.toggle('.card__button-like_active_true')
        });

        return cardElement;
    }
}

export default Card;