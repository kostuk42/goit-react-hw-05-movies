import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import styled from 'styled-components';
import SharedLayout from "./SharedLayout/SharedLayout";

const StyledApp = styled.div`
li {
  list-style: none;
  text-decoration: none;
  }
/* Your global styles here */
`;

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = React.lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = React.lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = React.lazy(() => import('./Cast/Cast'));
const Reviews = React.lazy(() => import('./Reviews/Reviews'));

const App = () => {
  return (
    <Router>
      <StyledApp>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={
              <SharedLayout>
                <Home/>
              </SharedLayout>
            }/>
            <Route path="/movies" element={
              <SharedLayout>
                <Movies/>
              </SharedLayout>
            }/>
            <Route path="/movies/:movieId" element={<MovieDetails/>}>
              <Route path="cast" element={<Cast/>}/>
              <Route path="reviews" element={<Reviews/>}/>
            </Route>
            <Route path="*" element={<Navigate to="/" replace/>}/>
          </Routes>
        </Suspense>
      </StyledApp>
    </Router>
  );
};

export default App;

