import styled from 'styled-components';

export const RelatedBlogsCardContainer = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-rows: 19rem auto;
  border: 0.1rem solid grey;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  @media only screen and (max-width: 768px) {
    grid-template-rows: 15rem auto;
  }

  @media only screen and (max-width: 576px) {
    grid-template-rows: 12rem auto;
  }
`;

export const RelatedBlogsCardImg = styled.img`
  width: 100%;
  height: 100% !important;
  object-fit: cover;
`;

export const RelatedBlogsCardWrapper = styled.div`
  padding: 1rem;
  border-top: 0.1rem solid grey;
`;

export const RelatedBlogsCardTitle = styled.a`
  cursor: pointer;
  margin: 0;
  padding: 1rem 0;
  align-self: center;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  font-size: 2rem;
  color: black;
`;

export const RelatedBlogsCardPostedBy = styled.p`
  margin-top: 3px;
  padding: 0.5rem 0;
  font-size: 1.6rem;
  align-self: center;

  span {
    color: darkblue;
    font-weight: bold;
  }
`;

export const LinkBlogTitle = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const RelatedBlogsCardExcerpt = styled.p`
  margin-top: 3rem;
  color: black;

  font-size: 1.5rem;

  @media only screen and (max-width: 310px) {
    font-size: 1.5rem;
  }
`;
