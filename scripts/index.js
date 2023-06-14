import initialCards from './cards.js';
import Card from './Card.js';

const editButton = document.querySelector('.profile__edit-button');

const addButton = document.querySelector('.profile__add-button');

const cardsSection = document.querySelector('.elements');

const closeButtons = document.querySelectorAll('.popup__button-close');
const popups = document.querySelectorAll('.popup');

const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__image-caption');

const imagePopup = document.querySelector('#imagePopup');
const editPopup = document.querySelector('#editPopup');
const newPlacePopup = document.querySelector('#newPlacePopup');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const editFormElement = document.querySelector("#editForm");
const nameInput = editFormElement.querySelector('input[name="username"]');
const jobInput = editFormElement.querySelector('input[name="job"]');

const newPlaceFormElement = document.querySelector("#newPlaceForm");
const newPlaceNameInput = newPlaceFormElement.querySelector('input[name="name"]');
const newPlaceLinkInput = newPlaceFormElement.querySelector('input[name="link"]');

document.addEventListener('keydown', (event) => {
    if (event.code === "Escape") {
        console.log(`{escape.pressed}`);
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
    console.log(`{click.edit.button}`);
    openPopup(editPopup);
});

addButton.addEventListener('click', () => {
    console.log(`{click.add.button}`);
    openPopup(newPlacePopup);
});

const closePopup = (popup) => {
    console.log(`{close.popup{${popup}}`);
    popup.classList.remove('popup_opened');
};

const openPopup = (popup) => {
    console.log(`{open.popup{${popup}}`);
    popup.classList.add('popup_opened');
};

const addInitialCard = () => {
    for (const initialCard of initialCards) {
        const card = new Card(initialCard.link, initialCard.name, '.card__template').createCard();
        console.log(`{adding.initial.cards{${initialCard.link}, ${initialCard.name}}`);
        cardsSection.prepend(card);
    }
};

addInitialCard();

function handleEditFormSubmit(evt) {
    console.log(`{submit.edit.form}`);
    evt.preventDefault();
    nameInput.textContent = nameInput.value;
    jobInput.textContent = jobInput.value;
    profileTitle.innerText = nameInput.value;
    profileSubtitle.innerText = jobInput.value;
    closePopup(editPopup);
}

function handleNewPlaceFormSubmit(evt) {
    console.log(`{submit.newPlace.form}`);
    evt.preventDefault();
    const card = new Card(newPlaceLinkInput.value, newPlaceNameInput.value, '.card__template').createCard();
    newPlaceLinkInput.value = "";
    newPlaceNameInput.value = "";
    cardsSection.prepend(card);
    closePopup(newPlacePopup);
}

editFormElement.addEventListener('submit', handleEditFormSubmit);
newPlaceFormElement.addEventListener('submit', handleNewPlaceFormSubmit);