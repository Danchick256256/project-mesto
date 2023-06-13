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
            console.log(`{handled.like.click}`);
            this.likeButton.classList.toggle('card__button-like_active_true')
        });

        this.deleteButton = cardElement.querySelector('.card__button-delete');
        this.deleteButton.addEventListener('click', () => {
            console.log(`{handled.delete.click}`);
            this.deleteButton.parentNode.classList.add("card__remove");
            setTimeout(() => this.deleteButton.parentNode.remove(), 350); /* Как мне избавиться от parentNode? closest() не удаляет его */
        });

        return cardElement;
    }
}

export default Card;