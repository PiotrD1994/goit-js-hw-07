import { galleryItems } from './gallery-items.js'; 
// Change code below this line

console.log(galleryItems);
 
const gallery = document.querySelector('.gallery')

for (const item of galleryItems) {
const htmlString =   `<li>
<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img 
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</div>
</li>`
gallery.innerHTML += htmlString
}
 
gallery.addEventListener("click", choosePicture)

let modal;

function closeEscape(event) {
  if(event.key === "Escape") {
    modal.close()
  }
}

function choosePicture(event) {
  event.preventDefault()
 if(event.target.nodeName !== "IMG") {
  return
 }

 const selectedPictureSrc = event.target.getAttribute("data-source")
 const selectedImage = document.createElement("img")
 selectedImage.src = selectedPictureSrc
 selectedImage.alt = event.target.getAttribute("alt")
 modal = basicLightbox.create(`<div>
 <img src="${selectedImage.src}" alt="${selectedImage.alt}" />
</div>`, {
onShow: (instance) => {
  window.addEventListener("keydown", closeEscape)
},
onClose: (instance) => {
  window.removeEventListener("keydown", closeEscape)
}
})
 modal.show()
 modal.element().addEventListener("click", () => {
  modal.close()
})
}



















