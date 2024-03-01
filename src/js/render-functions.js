// У файлі render-functions.js створи функції для відображення елементів інтерфейсу.

import iziToast from 'izitoast';

export function renderImages(images, list) {
  if (images.length === 0) {
    iziToast.error({
      title: '',
      message:
        'Sorry, there are no images matching your search query. Please, try again!',
      position: 'topRight',
    });
      return;
  }
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
                    <a class="gallery-link" href="${largeImageURL}">
                        <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
                    </a>
                    <div class="parameters">
                        <div class="params">
                            <p class="options">Likes</p>
                            <p class="quantity">${likes}</p>
                        </div>
                        <div class="params">
                            <p class="options">Views</p>
                            <p class="quantity">${views}</p>
                        </div>
                        <div class="params">
                            <p class="options">Comments</p>
                            <p class="quantity">${comments}</p>
                        </div>
                        <div class="params">
                            <p class="options">Downloads</p>
                            <p class="quantity">${downloads}</p>
                        </div>
                    </div>
                </li>`;
      }
    )
    .join('');
  list.insertAdjacentHTML('beforeend', markup);
}

export function clearList(list, gallery) {
  list.innerHTML = '';
  if (gallery) {
    gallery.refresh();
  }
}
