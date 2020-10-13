import React from 'react'
import { IMAGE_BASE_URL } from '../../Movies/MoviesAPI';
import "./Movies.css"


const MovieCard = ({ movies }) => {
    return (
        <>
            {movies.map(movie => (
                <div key={movie.id} className="example-2 card">
                    <div
                        className="wrapper"
                        style={{
                            background: `url('${IMAGE_BASE_URL}${movie.poster_path}') center/cover no-repeat`
                        }}
                    >
                        <div className="header">
                            <div className="date">
                                <span className="day">{movie.release_date}</span>
                            </div>
                            <ul className="menu-content">
                                <li>
                                    <span>{movie.vote_count}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="data">
                            <div className="content">
                                {/* <span className="author"></span> */}
                                <h1 className="title">
                                    <a>{movie.title}</a>
                                </h1>
                                <p className="text">{movie.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );

}

export default MovieCard;
