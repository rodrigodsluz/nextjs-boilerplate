import Layout from '@components/Layout';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../src/styles/GlobalStyle';
import theme from '../src/styles/theme';

const Application = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
);

export default Application;
