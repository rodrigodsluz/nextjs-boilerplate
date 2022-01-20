import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: inherit;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px;

  background-color: yellow;

  ${({ theme }) => theme.breakpoints.higherThan('desktop')} {
    left: initial;
  }
`;
