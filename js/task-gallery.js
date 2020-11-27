import images from './gallery-items.js';

const galleryContainer = document.querySelector('ul.js-gallery');
const modal = document.querySelector('.js-lightbox');
const closeOnClick = document.querySelector('div.lightbox__overlay');
const modalImage = document.querySelector('img.lightbox__image');
const btn = document.querySelector('button[data-action="close-lightbox"]')

// console.log(closeOnClick);

images.map((el, index) => {
    galleryContainer.innerHTML += `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${el.original}"
  >
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
      data-index="${index}"
    />
  </a>
</li>`;
    // console.log(el);
});


galleryContainer.addEventListener('click', (e) => {
    e.preventDefault();
    let modalLink = e.target.dataset.source;
    modal.classList.add('is-open');
    modalImage.src = modalLink;
    modalImage.dataset.index = e.target.dataset.index;
});

btn.addEventListener('click', closeModal);
closeOnClick.addEventListener('click', closeModal);

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal()
    }
    if (e.key === 'ArrowLeft') {
        ArrowLeft()
    }
    if (e.key === 'ArrowRight') {
        ArrowRight()
    }
});

function closeModal() {
    modal.classList.remove('is-open');
    modalImage.src = '';
}

function changeSrcImage(step, index) {
    modalImage.dataset.index = `${index + step}`;
    modalImage.src = images[index + step].original;
}

function ArrowLeft() {
    let index = +modalImage.dataset.index;
    if (index === 0) {
        changeSrcImage(0, images.length - 1);
        return;
    }
    // console.log(index);
    changeSrcImage(-1, index);
}

function ArrowRight() {
    let index = +modalImage.dataset.index;
    if (index === images.length - 1) {
        changeSrcImage(0, 0);
        return;
    }
    // console.log(index);
    changeSrcImage(1, index);
}

// const galleryMarkup = createGallery(images);


// galleryContainer.addEventListener('click', onGalleryContainerClick);

// function createGallery(imagesArray) {
//     return imagesArray
//         .map(({ preview, original, description }, index) => {
//     return `
//         <li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="${original}"
//   >
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       data-index="${index}"
//       alt="${description}"
//     />
//   </a>
// </li>`;
//   })
//     .join(" ");

// };
 
// galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);



// function onGalleryContainerClick(evt) {
//     evt.preventDefault();

//     if (!evt.target.classList.contains('gallery__image')) {
//         return;
//     }

//     const originalImageSource = evt.target.dataset.source;
//     const originalImageAlt = evt.target.alt;
    

//     modalImage.setAttribute('src', originalImageSource);
//     modalImage.setAttribute('src', originalImageAlt);

//     modalContainer.classList.add('is-open');

// }

// function closeModal() {

//     modalImage.setAttribute('src', '');
//     modalImage.setAttribute('src', '');
//     modalContainer.classList.remove('is-close');


// }

// galleryContainer.addEventListener('click', onGalleryContainerClick);
// btnCloseModal.addEventListener('click', closeModal);

// 
// closeOnClick.addEventListener('ckick', closeModal);

// function onPressEsc(evt) {
//     if (evt.code === "Escape") {
//         closeModal();
// }
// }

// function slideImage(event) {

// }