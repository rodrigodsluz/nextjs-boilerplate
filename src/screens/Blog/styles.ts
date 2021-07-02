import styled, { css } from 'styled-components';

export const BlogArticleContainer = styled.article`
  grid-column: center-start / center-end;

  margin: 0;

  @media only screen and (max-width: 768px) {
    grid-column: full-start / full-end;
  }
`;

export const BlogBanner = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;

  @media only screen and (max-width: 576px) {
    height: 25rem;
  }
`;

export const BlogWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media only screen and (max-width: 768px) {
    grid-column: full-start / full-end;

    margin: 0 2rem;
  }
`;

export const BlogContent = styled.div`
  //border: 1px solid grey;
  border-radius: 1rem;
  width: 80%;
  margin: auto;
  padding: 2rem;

  @media only screen and (max-width: 768px) {
    grid-row: 2;
    margin-top: 1rem;
    width: 100%;
  }

  @media only screen and (max-width: 576px) {
    border: none;
    padding: 0;
  }
`;

export const BlogTitle = styled.h1`
  text-align: center;
  line-height: 8.5rem;
  font-size: 5.5rem;
  margin-bottom: 1rem;
  color: black;

  @media only screen and (max-width: 850px) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 576px) {
    line-height: 3.5rem;

    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
`;

export const BlogWrittenBy = styled.p`
  font-size: 1.8rem;
  color: black;

  @media only screen and (max-width: 576px) {
    font-size: 1.4rem;
  }

  span {
    color: green;
    font-weight: 600;
  }
`;

export const LinkBlogTitle = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const BlogCategoriesTags = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const CategoryAndTagStyles = css`
  //font-family: 'Archivo';
  font-size: 1.5rem;
  border-radius: 1rem;
  padding: 0.44rem 1.7rem;
  margin: 1rem 1rem 0 0;

  align-self: center;
  transition: all 0.3s linear;
  cursor: pointer;

  @media only screen and (max-width: 576px) {
    font-size: 1.3rem;
    padding: 0.35rem 1.5rem;
    margin-left: 0;
  }
`;

export const LinkCategory = styled.a`
  ${CategoryAndTagStyles}
  background-color: green;
  color: white;

  &:hover {
    background-color: black;
  }
`;

export const LinkTag = styled.a`
  ${CategoryAndTagStyles}
  background-color: #4B0082;
  color: white;

  &:hover {
    background-color: black;
  }
`;

export const BlogText = styled.div`
  margin-top: 3rem;
  color: black;

  p {
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  @media only screen and (max-width: 310px) {
    font-size: 1.5rem;
  }
`;

export const BlogSidebar = styled.div`
  margin-top: 4rem;
  height: 100%;

  @media only screen and (max-width: 576px) {
    display: none;
  }
`;

export const BlogSidebarCategories = styled.div`
  border: 1px solid red;
  border-radius: 1rem;
  padding: 2rem;

  display: flex;
  flex-flow: wrap;

  @media only screen and (max-width: 576px) {
    border: none;
  }
`;

export const LinkSidebarCategory = styled.a`
  cursor: pointer;
  //background: #gre;
  width: 100%;
  text-align: center;
  font-size: 1.6rem;
  color: black;

  border-radius: 1rem;
  border: 0.1rem solid purple;
  padding: 0.6rem 1.8rem;
  margin: 0.4rem;
  transition: all 0.3s linear;

  @media only screen and (max-width: 768px) {
    grid-row: 1;
    width: auto;
  }

  &:hover {
    background-color: orange;
  }
`;
