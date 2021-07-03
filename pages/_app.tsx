import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '../src/styles/Global';
import Theme from '../src/styles/Theme';

const Application = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ThemeProvider theme={Theme}>
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
  </ThemeProvider>
);

export default Application;
