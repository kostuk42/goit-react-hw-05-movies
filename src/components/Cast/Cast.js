import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getMovieCast} from "../../services/api";
import styled from 'styled-components';
import {NoPhotoAvailable} from "../styles";


const CastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
`;

const ActorCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100px;
  height: 200px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  img {
    border-radius: 5px 5px 0 0;
    width: 100%;
    object-fit: cover;
    height: 150px;

  }

  .name {
  display: flex;
  justify-content: center;
   align-items: center;
   width: 100%;
   flex-grow: 1;
   text-align: center;
   word-break: break-word;
  }
`;


const Cast = () => {
  const {movieId} = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    // Function to fetch movie cast from /movies/get-movie-credits API endpoint
    const fetchMovieCast = async () => {
      try {
        const castData = await getMovieCast(movieId);
        setCast(castData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <CastContainer>
        {cast.map((actor) => (
          <ActorCard key={actor.id}>
            {actor.profile_path ? (
              <img src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`} alt={actor.name}/>
            ) : (
              <NoPhotoAvailable>No Photo</NoPhotoAvailable>
            )}
            <div className="name">{actor.name}</div>
          </ActorCard>
        ))}
      </CastContainer>
    </div>
  );
};

export default Cast;
