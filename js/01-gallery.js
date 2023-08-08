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
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</div>`
gallery.innerHTML += htmlString
}
 
gallery.addEventListener("click", choosePicture)

function choosePicture(event) {
  event.preventDefault()
 if(event.target.nodeName !== "IMG") {
  return
 }
 const selectedPictureSrc = event.target.getAttribute("data-source")
 const selectedImage = document.createElement("img")
 selectedImage.src = selectedPictureSrc
 selectedImage.alt = event.target.getAttribute("alt")
 const modal = basicLightbox.create(selectedImage)
 modal.show()
}









