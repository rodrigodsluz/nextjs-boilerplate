import Footer from '@components/Footer';
import NavBar from '@components/NavBar';

import { ILayout } from './interface';
import { Container, Wrapper, ChildrenContainer } from './styles';

const Layout = ({ children }: ILayout): JSX.Element => (
  <Container>
    <Wrapper>
      <NavBar />

      <ChildrenContainer>{children}</ChildrenContainer>

      <Footer />
    </Wrapper>
  </Container>
);

export default Layout;
