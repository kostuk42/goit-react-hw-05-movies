import React, {lazy} from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import styled from 'styled-components';
import SharedLayout from "./SharedLayout/SharedLayout";

const StyledApp = styled.div`
li {
  list-style: none;
  text-decoration: none;
  }

 .loader {
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = React.lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = React.lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = React.lazy(() => import('./Cast/Cast'));
const Reviews = React.lazy(() => import('./Reviews/Reviews'));

const App = () => {
  return (
    <Router basename={'/goit-react-hw-05-movies'}>
      <StyledApp>
        <Routes>
          <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/movies/:movieId" element={<MovieDetails/>}>
              <Route path="cast" element={<Cast/>}/>
              <Route path="reviews" element={<Reviews/>}/>
            </Route>
            <Route path="*" element={<Navigate to="/" replace/>}/>
          </Route>
        </Routes>
      </StyledApp>
    </Router>
  );
};

export default App;

