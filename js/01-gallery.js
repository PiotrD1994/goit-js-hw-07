import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryItemsHTML = galleryItems.map(({preview, original, descritpion}) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${descritpion}"/>
    </a>
    </li>`
}).join('');

gallery.innerHTML = galleryItemsHTML

gallery.addEventListener('click', galleryClick)

function galleryClick(event) {
    event.preventDefault();
    const clickElement = event.target;
    if (clickElement.classList.contains("gallery__image")) {
        const largeImage = clickElement.dataset.source

       const instance = basicLightbox.create (
        `<img src= "${largeImage}" width="800" height="600">`
       )
       instance.show();

       window.addEventListener('keydown', closeModal)

       function closeModal(event) {
        if(event.key === 'Escape') {
            instance.close()
            window.removeEventListener('keydown', closeModal)
        }
       }
    }
}