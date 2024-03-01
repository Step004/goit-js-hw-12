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
const buttonLoad = document.querySelector('.button-load');
const loaderEnd = document.querySelector('.loader-down');
let gallery;
let page;
let current_value;



function getPhoto(event) {
  event.preventDefault();
  loader.style.display = 'block';
  current_value = input.value;

  page = 1;
  clearList(list, gallery);

  getImages(current_value, page)
    .then(data => {
      const images = data.hits;

      renderImages(images, list);

      loader.style.display = 'none';
      input.value = '';
      buttonLoad.style.display = 'block';

      gallery = new SimpleLightbox('.gallery a', {
        background: 'rgba(46, 47, 66, 0.8)',
        captionDelay: 250,
        captionsData: 'alt',
      });

      gallery.on('error.simplelightbox', function (e) {
        console.log(e);
      });
    })
    .catch(() => {
      iziToast.error({
        title: '',
        message:
          'Sorry, there was an error while fetching images. Please, try again later!',
        position: 'topRight',
      });
    });
}

const img = '';
const options = '';

function getMorePhoto(event) {
  event.preventDefault();
  page += 1;

  buttonLoad.style.display = 'none';
  loaderEnd.style.display = 'block';

  getImages(current_value, page)
    .then(data => {
      const images = data.hits;
      let number_img = data.totalHits; 
      let number_pages = number_img / 15;
      if (number_pages < page) {
        buttonLoad.style.display = 'none';
        loaderEnd.style.display = 'none';
        iziToast.info({
          title: '',
          message: "We're sorry, but you've reached the end of search results.",
          position: 'bottomRight',
        });
        return;
      }
      renderImages(images, list);
      
      buttonLoad.style.display = 'block';
      loaderEnd.style.display = 'none';
      
      const img = list.lastElementChild;
      const options = img.getBoundingClientRect();
      window.scrollBy({top: options.height*2, behavior: "smooth",});

      gallery = new SimpleLightbox('.gallery a', {
        background: 'rgba(46, 47, 66, 0.8)',
        captionDelay: 250,
        captionsData: 'alt',
      });

      gallery.on('error.simplelightbox', function (e) {
        console.log(e);
      });
    })
    .catch(() => {
      iziToast.error({
        title: '',
        message:
          'Sorry, there was an error while fetching images. Please, try again later!',
        position: 'topRight',
      });
    });
}

form.addEventListener('submit', getPhoto);
buttonLoad.addEventListener('click', getMorePhoto);