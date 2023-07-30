import React, {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {MoviesList} from "../../components/MoviesList/MoviesList";
import {searchMovies} from "../../services/api";

const Movies = () => {
  const [moviesByQuery, setMoviesByQuery] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') || '';

  const handleInputChange = (event) => {
    setSearchParams({query: event.target.value});
  };

  const handleSearch = async () => {
    const result = await searchMovies(query);
    setMoviesByQuery(result);
  };

  useEffect(() => {
    const search = async () => {
      const result = await searchMovies(query);
      setMoviesByQuery(result);
    };
    search();
  }, [query]);

  return (
    <div>
      <h2>Movie Search</h2>
      <input type="text" value={query} onChange={handleInputChange}/>
      <button onClick={handleSearch}>Search</button>
      <MoviesList movies={moviesByQuery}/>
    </div>
  );
};

export default Movies;
