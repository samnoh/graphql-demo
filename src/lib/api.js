import axios from 'axios';

axios.defaults.baseURL = 'https://yts.lt/api/v2/list_movies.json?';

export const getMovies = async (limit, rating) => {
    let URL = '';
    if (limit > 0) URL += `&limit=${limit}`;
    if (rating > 0) URL += `&minimum_rating=${rating}`;

    return axios.get(URL).then(res => res.data.data.movies);
};
