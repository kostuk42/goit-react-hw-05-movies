import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from 'react-router-dom';
import {getMovieDetails} from "../../services/api";
import styled from 'styled-components';
import {NoPhotoAvailable} from "../../components/styles";

const StyledMovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  img {
    width: 200px;
    height: auto;
  }
`;

const BackButton = styled(Link)`
  text-decoration: none;
  color: blue;
  font-size: 16px;
  margin-bottom: 10px;
`;

const MovieDetails = () => {
  const {movieId} = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <StyledMovieDetails>
      <BackButton to={location.state?.from || '/'}>Back</BackButton>
      {movieDetails.poster_path &&
      <img src={`https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`} alt={movieDetails.title}/>}
      {!movieDetails.poster_path && <NoPhotoAvailable>No photo</NoPhotoAvailable>}
      <h2>{movieDetails.title}</h2>
      <p>Release Date: {movieDetails.release_date}</p>
      <p>Overview: {movieDetails.overview}</p>
      <p>Rating: {movieDetails.vote_average}</p>
      <ul>
        <li>
          <Link to="cast" state={{...location.state}}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{...location.state}}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet/>
    </StyledMovieDetails>
  );
};

// MovieDetails.propTypes = {
//   match: PropTypes.object.isRequired,
// };

export default MovieDetails;
