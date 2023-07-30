import React, {useEffect, useState} from 'react';
import {getTrendingMovies} from "../../services/api";
import {Container} from './styles';
import {MoviesList} from "../../components/MoviesList/MoviesList";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getTrendingMovies();
      setTrendingMovies(result.map(m => ({...m, title: m.title || m.name})));
    };

    fetchData();
  }, []);

  return (
    <Container>
      <h2>Trending Movies Today</h2>
      <MoviesList movies={trendingMovies}/>
    </Container>

  );
};

export default Home;
