import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['x-api-key'] =
//   '39308557-abe1d2f406269cfbe9ef6726c';

export const fetchImages = async (query, page, perPage) => {
  const API_KEY = '39308557-abe1d2f406269cfbe9ef6726c';
  const response = await axios.get(
    `?q=${query.split('/')[1]}&page=${page}&key=${API_KEY}&per_page=${perPage}`
  );
  return response.data;
};
