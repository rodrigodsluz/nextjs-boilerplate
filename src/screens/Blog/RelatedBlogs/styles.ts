import styled from 'styled-components';

export const RelatedBlogsContainer = styled.section`
  margin: auto;
  width: 80%;
  grid-column: center-start / center-end;
  margin-bottom: 0rem;

  @media only screen and (max-width: 768px) {
    grid-column: full-start / full-end;
    margin: 2rem;
    width: 90%;
  }
`;

export const RelatedBlogsTitle = styled.h4`
  margin-bottom: 4.5rem;
  text-align: center;
  font-size: 2.8rem;
  color: black;

  @media only screen and (max-width: 576px) {
    font-size: 3.3rem;
  }
`;

export const RelatedBlogsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.6rem;

  @media screen and (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 950px) {
    grid-template-columns: 1fr;
  }

  @media only screen and (max-width: 576px) {
    margin-top: 0rem;
    grid-column-gap: 1rem;
  }
`;
