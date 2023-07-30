import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from "prop-types";

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

const SharedLayout = ({children}) => {
  return (
    <div>
      <Header>
        <Button to="/">Home</Button>
        <Button to="/movies">Movies</Button>
      </Header>
      {children}
    </div>
  );
};

SharedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SharedLayout;
