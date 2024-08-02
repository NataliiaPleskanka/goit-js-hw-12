import axios from 'axios';
import 'izitoast/dist/css/iziToast.min.css';

export default async function httpRequest(key, text, pageN, perPage) {
  const searchParams = new URLSearchParams({
    key: `${key}`,
    q: `${text}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: `${perPage}`,
    page: `${pageN}`,
  });
  const response = await axios.get(`https://pixabay.com/api/?${searchParams}`);
  return response.data;
}