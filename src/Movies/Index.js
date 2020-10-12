import { API_KEY, API_URL } from './MoviesAPI';
import axios from 'axios';
 
export const fetchMovies = (category) => {
   
    let MoviesURL = `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${category}`;
    console.log(MoviesURL);
    
    return axios
        .get(MoviesURL)
        .then(mov => {
            const moviesList = mov;
            console.log(`list:  ${moviesList}`)
            return moviesList
        })
};

export const fetchCategories = () => {
    let categoryURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    return axios
    .get(categoryURL)
    .then(cat => {
        const categoryList = cat;
        console.log(`list cat:  ${categoryList}`)
        return categoryList
    })
};