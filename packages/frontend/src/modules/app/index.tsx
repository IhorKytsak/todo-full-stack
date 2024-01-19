import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';

import { MainRouter } from '../navigation';
import Header from '../common/components/header';
import Footer from '../common/components/footer';
import * as theme from '../theme';
import { GlobalStyles, MainWrapper } from './app.styled';
import '../../style.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      cacheTime: Infinity
    }
  }
});

const AppContainer = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <MainWrapper>
        <Header />
        <MainRouter />
        <Footer />
      </MainWrapper>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </ThemeProvider>
);

export default AppContainer;
