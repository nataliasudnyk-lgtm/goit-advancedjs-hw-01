
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import image1 from '../img/image-1.png';
import image2 from '../img/image-2.png';
import image3 from '../img/image-3.png';
import image4 from '../img/image-4.png';
import image5 from '../img/image-5.png';
import image6 from '../img/image-6.png';
import image7 from '../img/image-7.png';
import image8 from '../img/image-8.png';
import image9 from '../img/image-9.png';

const images = [
  {
    preview: image1,
    original: image1,
    description: 'Teamwork and Planning',
  },
  {
    preview: image2,
    original: image2,
    description: 'Creative Idea',
  },
  {
    preview: image3,
    original: image3,
    description: 'Design and Development',
  },
  {
    preview: image4,
    original: image4,
    description: 'Modern Meeting Room',
  },
  {
    preview: image5,
    original: image5,
    description: 'Creative Workspace',
  },
  {
    preview: image6,
    original: image6,
    description: 'Open Office',
  },
  {
    preview: image7,
    original: image7,
    description: 'Laptop and Coffee',
  },
  {
    preview: image8,
    original: image8,
    description: 'Working on a Laptop',
  },
  {
    preview: image9,
    original: image9,
    description: 'Business Presentation',
  },
];

const gallery = document.querySelector('.gallery');

const galleryMarkup = images
  .map(
    ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);


const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
