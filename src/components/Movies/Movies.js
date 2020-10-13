import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { fetchMovies } from "../../Movies/Index";
import MovieCard from "./MovieCard";
import Grid from '@material-ui/core/Grid';



const Movies = () => {

    const location = useLocation();

    let genra = location.state.category
    const [movies, setMov] = useState([]);
    useEffect(() => {
        function fetchData() {
            fetchMovies(genra)
                .then(moviesList => {
                    console.log(`movie list :  ${moviesList.data.results}`);
                    setMov(moviesList.data.results);
                })
        }
        fetchData();
    }, []);

    return (
        <>
            <Grid container
                direction="row"
                justify="space-around"
                alignItems="center"
                className="movies"
                >
                    <MovieCard movies={movies} />
            </Grid>
        </>
    );

}

export default Movies;
