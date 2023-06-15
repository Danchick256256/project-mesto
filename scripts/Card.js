class Card {
    constructor(imageLink, name, templateClass) {
        this.image = imageLink;
        this.name = name;
        this.template = templateClass;
    }

    createCard() {
        const imagePopup = document.querySelector('#imagePopup');
        const popupImage = document.querySelector('.popup__image');
        const popupCaption = document.querySelector('.popup__image-caption');

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
            setTimeout(() => cardElement.remove(), 350);
        });

        this.cardImage.addEventListener('click', () => {
            console.log(`{click.on.image{caption: ${this.cardTitle}}`);
            popupImage.src = this.cardImage.src;
            popupCaption.innerHTML = this.cardTitle.textContent;
            openPopup(imagePopup);
        });

        return cardElement;
    }
}

export default Card;
export function openPopup(popup) {
    console.log(`{open.popup{${popup}}`);
    popup.classList.add('popup_opened');
}