import axios from 'axios';

axios.defaults.baseURL = 'https://yts.lt/api/v2';

export const getMovieById = id => {
    const URL = `/movie_details.json?`;
    return axios.get(`${URL}movie_id=${id}`).then(res => res.data.data.movie);
};

export const getMovies = (limit, rating) => {
    let URL = '/list_movies.json?';
    if (limit > 0) URL += `&limit=${limit}`;
    if (rating > 0) URL += `&minimum_rating=${rating}`;

    return axios.get(URL).then(res => res.data.data.movies);
};

export const getSuggestions = id => {
    const URL = `/movie_suggestions.json?`;
    return axios.get(`${URL}movie_id=${id}`).then(res => res.data.data.movies);
};
