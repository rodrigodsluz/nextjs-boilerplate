import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;

  overflow-y: auto;
  overflow-x: hidden;

  background-image: url('https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80');
  background-position: center;

  display: flex;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: inherit;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  flex: 1;

  ${({ theme }) => theme.breakpoints.higherThan('desktop')} {
    width: 982px;
  }
`;

export const ChildrenContainer = styled.div`
  height: inherit;
  width: inherit;

  padding: 16px;
  margin-top: 60px;

  background-color: ${({ theme }) => theme.colors.white};
`;
