import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { MainRouter } from '../navigation';
import Header from '../common/components/header';
import Footer from '../common/components/footer';
import * as theme from '../theme';
import { GlobalStyles, MainWrapper } from './app.styled';
import { AuthProvider } from '../contexts/auth-context';
import '../../style.css';

const queryClient = new QueryClient();

const AppContainer = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <MainWrapper>
            <Header />
            <MainRouter />
            <Footer />
          </MainWrapper>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            closeOnClick
            pauseOnHover={false}
            draggable={false}
            theme="colored"
          />
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </ThemeProvider>
);

export default AppContainer;
