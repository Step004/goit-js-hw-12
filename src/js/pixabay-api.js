// У файлі pixabay-api.js зберігай функції для HTTP-запитів.

const KEY = '42496728-577636fc2b585ecd9d4373a90';
const BASE_URL = 'https://pixabay.com/api/';

export function getImages(inputValue) {
    const LINK = `${BASE_URL}?key=${KEY}&q=${inputValue}`;
    return fetch(LINK)
        .then(response => {
            if (!response.ok) {
                throw new Error('image error!');
            }
            return response.json();
        });
}
