// У файлі pixabay-api.js зберігай функції для HTTP-запитів.
import axios from 'axios';
const KEY = '42496728-577636fc2b585ecd9d4373a90';
const BASE_URL = 'https://pixabay.com/api/';


export async function getImages(inputValue, page) {
    const LINK = `${BASE_URL}?key=${KEY}&q=${inputValue}&per_page=15&page=${page}`;

    const response = await axios.get(LINK);
    return response.data;
}