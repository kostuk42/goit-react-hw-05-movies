// Home/styles.js
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const MovieItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const MoviePoster = styled.img`
  width: 100px;
  height: 150px;
  object-fit: cover;
`;

export const MovieTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
`;
