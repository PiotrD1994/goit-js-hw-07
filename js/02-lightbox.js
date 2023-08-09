import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')

for (const item of galleryItems) {
    const htmlString =   `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img 
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a>
    </li>`
    gallery.innerHTML += htmlString
    }