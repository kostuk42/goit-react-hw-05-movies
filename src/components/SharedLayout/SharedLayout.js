import React, {Suspense} from 'react';
import {Link, Outlet} from 'react-router-dom';
import styled from 'styled-components';
import Loader from "../Loader/Loader";

const Header = styled.div`
  background-color: #333;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin-right: 10px;
`;

const SharedLayout = () => {
  return (
    <div>
      <Header>
        <Button to="/">Home</Button>
        <Button to="/movies">Movies</Button>
      </Header>
      <Suspense fallback={<Loader/>}>
        <Outlet/>
      </Suspense>
    </div>
  );
};

export default SharedLayout;
