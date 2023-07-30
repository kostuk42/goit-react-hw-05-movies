import {MovieItem, MoviePoster, MovieTitle} from "../../pages/Home/styles";
import React from "react";
import {Link, useLocation} from "react-router-dom";
import {NoPhotoAvailable} from "../styles";
import PropTypes from "prop-types";

export const MoviesList = ({movies}) => {
  const {pathname, search} = useLocation();
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{from: pathname + search}}>
            <MovieItem>
              {movie.poster_path &&
              <MoviePoster src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>}
              {!movie.poster_path && <NoPhotoAvailable>No photo</NoPhotoAvailable>}
              <MovieTitle>{movie.title}</MovieTitle>
            </MovieItem>
          </Link>
        </li>
      ))}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ).isRequired
}
