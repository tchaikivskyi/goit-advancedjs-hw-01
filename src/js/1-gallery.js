import SimpleLightbox from 'simplelightbox';
import images from './data-images';

const refs = {
  gallery: document.querySelector('.gallery'),
};

const createGalleryItem = ({ preview, original, description }) => {
  return `
  <li class="gallery-item">
	  <a class="gallery-link" href="${original}">
      <img
        class="gallery-image"
        src="${preview}"
        alt="${description}"
        />
    </a>
  </li>
  `;
};

const galleryMarkup = images.map(createGalleryItem).join('');
refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
  doubleTapZoom: 1,
  maxZoom: 1,
  fadeSpeed: 250,
  widthRatio: 0.85,
});
