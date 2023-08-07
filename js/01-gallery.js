import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
 
const gallery = document.querySelector('.gallery')

for (const item of galleryItems) {
const htmlString =   `<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img 
    class="gallery__image"
    src="${item.preview}"
    data-source="large-image.jpg"
    alt="${item.description}"
  />
</a>
</div>`
gallery.innerHTML += htmlString
}
 
const gallerypictrues = document.querySelectorAll('.gallery__item')
const galleryLinks = document.querySelectorAll('.gallery__link')
const galleryImages = document.querySelectorAll('.gallert__image')

galleryItems.addEventListener('click', imageSelect)

function imageSelect(event) {
    event.preventDefault()
    if(event.target.nodeName !== "IMG") {
        return
    }

}



