// main.js
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import { clearList } from './js/render-functions';

const input = document.querySelector('.input');
const list = document.querySelector('.gallery');
const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
let gallery;

form.addEventListener('submit', getPhoto);

function getPhoto(event) {
  event.preventDefault();
  const inputValue = input.value;
  loader.style.display = 'block';

  clearList(list, gallery);

  getImages(inputValue)
    .then(data => {
      const images = data.hits;

      renderImages(images, list);

       gallery = new SimpleLightbox('.gallery a', {
        background: 'rgba(46, 47, 66, 0.8)',
        captionDelay: 250,
        captionsData: 'alt',
      });

      gallery.on('error.simplelightbox', function (e) {
        console.log(e);
      });
    })
    .catch(error => {
      iziToast.error({
        title: '',
        message:
          'Sorry, there was an error while fetching images. Please, try again later!',
        position: 'topRight',
      });
    })
    .finally(() => {
      loader.style.display = 'none';
      input.value = '';
    });
}
