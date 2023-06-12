import initialCards from './cards.js';
import Card from './Card.js';

const editButton = document.querySelector('.profile__edit-button');

const addButton = document.querySelector('.profile__add-button');

const cardsSection = document.querySelector('.elements');

const closeButtons = document.getElementsByClassName('popup__button-close');
const popups = document.getElementsByClassName('popup');

const image = document.querySelector('.popup__image');
const caption = document.querySelector('.popup__image-caption');

const imagePopup = document.querySelector('#imagePopup');
const editPopup = document.querySelector('#editPopup');
const newPlacePopup = document.querySelector('#newPlacePopup');

const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');

const editFormElement = document.querySelector("#editForm");
const nameInput = editFormElement.querySelector('input[name="username"]');
const jobInput = editFormElement.querySelector('input[name="job"]');

const newPlaceElement = document.querySelector("#newPlaceForm");
const newPlaceNameInput = newPlaceElement.querySelector('input[name="name"]');
const newPlaceLinkInput = newPlaceElement.querySelector('input[name="link"]');

function addListenersToCards() {
    const deleteButtons = document.getElementsByClassName("card__button-delete");
    for (const deleteButton of deleteButtons) {
        deleteButton.addEventListener('click', handleDeleteClick);
    }
    const cards = document.getElementsByClassName("card__image");
    for (const card of cards) {
        card.addEventListener('click', handleImageClick);
    }
    const likeButtons = document.getElementsByClassName("card__button-like");
    for (const likeButton of likeButtons) {
        likeButton.addEventListener('click', handleLikeClick);
    }
}

document.addEventListener('keydown', (event) => {
    if (event.code === "Escape") {
        for (const popup of popups) {
            closePopup(popup);
        }
    }
}, false);

for (const closeButton of closeButtons) {
    closeButton.addEventListener('click', () => {
        for (const popup of popups) {
            closePopup(popup);
        }
    });
}

editButton.addEventListener('click', () => {
    openPopup(editPopup);
});

addButton.addEventListener('click', () => {
    openPopup(newPlacePopup);
});

const closePopup = (popup) => {
    popup.classList.remove('popup_opened')
};

const openPopup = (popup) => {
    popup.classList.add('popup_opened')
};

const addInitialCard = () => {
    for (const initialCard of initialCards) {
        const card = new Card(initialCard.link, initialCard.name, '.card__template').createCard();
        cardsSection.prepend(card);
    }
    addListenersToCards();
};

addInitialCard();

function handleEditFormSubmit(evt) {
    evt.preventDefault();
    nameInput.setAttribute("value", nameInput.value);
    jobInput.setAttribute("value", jobInput.value);
    title.innerText = nameInput.value;
    subtitle.innerText = jobInput.value;
    closePopup(editPopup);
}

function handleNewPlaceFormSubmit(evt) {
    evt.preventDefault();
    const card = new Card(newPlaceLinkInput.value, newPlaceNameInput.value, '.card__template').createCard();
    cardsSection.prepend(card);
    addListenersToCards();
    closePopup(newPlacePopup);
}

function handleImageClick(evt) {
    image.setAttribute("src", evt.target.getAttribute("src"));
    caption.innerHTML = evt.target.nextElementSibling.getElementsByClassName("card__title")[0].innerHTML;
    openPopup(imagePopup);
}

function handleLikeClick(evt) {
    evt.target.classList.toggle("card__button-like_active_true");
}

function handleDeleteClick(evt) {
    evt.target.parentNode.classList.add("card__remove");
    setTimeout(() => evt.target.parentNode.remove(), 350);
}

editFormElement.addEventListener('submit', handleEditFormSubmit);
newPlaceElement.addEventListener('submit', handleNewPlaceFormSubmit);