import styled from 'styled-components';

export const HomeTitleContainer = styled.section`
  grid-column: center-start / center-end;

  width: 100%;
  margin: auto;

  @media only screen and (max-width: 550px) {
    grid-column: full-start / full-end;
  }
`;

export const HomeTitle = styled.h2`
  line-height: 8.5rem;
  font-size: 7.5rem;
  font-weight: 500;
  text-align: center;
  padding: 10rem 0;
  color: black;

  @media only screen and (max-width: 550px) {
    font-size: 4.5rem;
    line-height: 5.5rem;
    padding-top: 7rem;
    padding-bottom: 0;
  }
`;

export const HomeCategories = styled.section`
  grid-column: center-start / center-end;
  width: 90%;
  margin: auto;

  @media only screen and (max-width: 768px) {
    grid-column: full-start / full-end;
    margin: 6rem 2rem;
  }
`;

export const HomeCategoriesWrapper = styled.div`
  margin-top: 5rem;
  display: grid;
  cursor: pointer;

  grid-template-columns: repeat(3, 1fr);

  grid-gap: 1.6rem;

  @media screen and (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 576px) {
    margin-top: 0rem;
    grid-column-gap: 1rem;
  }
`;

export const HomeCategoriesCard = styled.a`
  display: grid;
  grid-template-rows: auto 16rem;
  transition: all 0.3s linear;

  @media screen and (max-width: 750px) {
    border: none;
  }

  @media screen and (max-width: 576px) {
    grid-template-rows: auto 15rem;
  }

  @media screen and (max-width: 395px) {
    grid-template-rows: auto 17.5rem;
  }

  @media screen and (max-width: 320px) {
    grid-template-rows: auto 20rem;
  }

  &:hover {
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;

    -webkit-box-shadow: 3px 3px 25px -14px rgba(0, 0, 0, 0.71);
    -moz-box-shadow: 3px 3px 25px -14px rgba(0, 0, 0, 0.71);
    box-shadow: 3px 3px 25px -14px rgba(0, 0, 0, 0.71);
  }
`;

export const HomeCategoriesImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const HomeCategoriesCardContent = styled.div`
  display: grid;
  grid-template-rows: 4rem 10rem;
  padding: 2rem 1.3rem;

  border: 0.1rem solid grey;
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;

  @media screen and (max-width: 750px) {
  }

  @media screen and (max-width: 576px) {
    grid-template-rows: 3.5rem;
    padding: 1rem;
  }
`;

export const HomeCategoriesCardContentTitle = styled.h2`
  font-size: 2.2rem;
  font-family: 'Nunito';
  font-weight: bold;
  margin: 0;
  letter-spacing: 1px;
  color: black;

  @media screen and (max-width: 1330px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 1050px) {
    font-size: 2.1rem;
  }

  @media screen and (max-width: 350px) {
    font-size: 1.9rem;
  }
`;

export const HomeCategoriesCardContentText = styled.p`
  font-size: 1.6rem;
  color: #484848;

  @media screen and (max-width: 576px) {
    font-size: 1.3rem;
  }
`;
