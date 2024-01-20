import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home';
import TodoPage from '../pages/todo';
import NotFoundPage from '../pages/not-found';
import { APP_KEYS } from '../common/consts';

export const MainRouter = () => (
  <Router>
    <Routes>
      <Route element={<HomePage />} path={APP_KEYS.ROUTER_KEYS.ROOT} />
      <Route element={<TodoPage />} path={APP_KEYS.ROUTER_KEYS.TODO} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);
