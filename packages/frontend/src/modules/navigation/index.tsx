import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePageContainer from '../home';
import { APP_KEYS } from '../common/consts';

export const MainRouter = () => (
  <Router>
    <Routes>
      <Route element={<HomePageContainer />} path={APP_KEYS.ROUTER_KEYS.ROOT} />
    </Routes>
  </Router>
);
