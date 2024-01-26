import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/home';
import TodoPage from '../pages/todo';
import LoginPage from '../pages/login';
import RegistrationPage from '../pages/registration';
import PasswordRecoveryPage from '../pages/password-recovery';
import PassdRecoveryConfirmPage from '../pages/pass-recovery-confirmation';
import ChangePasswordPage from '../pages/change-password';

import NotFoundPage from '../pages/not-found';
import { APP_KEYS } from '../common/consts';
import ProtectedRoute from './protected-route';
import PublicRoute from './public-route';
import PublicTodosPage from '../pages/public-todos';

export const MainRouter = () => (
  <Routes>
    <Route element={<ProtectedRoute />}>
      <Route element={<HomePage />} path={APP_KEYS.ROUTER_KEYS.HOME} />
      <Route element={<TodoPage />} path={APP_KEYS.ROUTER_KEYS.TODO} />
      <Route element={<ChangePasswordPage />} path={APP_KEYS.ROUTER_KEYS.CHANGE_PASSWORD} />
    </Route>

    <Route element={<PublicRoute />}>
      <Route element={<PublicTodosPage />} path={APP_KEYS.ROUTER_KEYS.PUBLIC_TODOS} />
      <Route element={<LoginPage />} path={APP_KEYS.ROUTER_KEYS.SIGN_IN} />
      <Route element={<RegistrationPage />} path={APP_KEYS.ROUTER_KEYS.SIGN_UP} />
      <Route element={<PasswordRecoveryPage />} path={APP_KEYS.ROUTER_KEYS.RECOVER_PASS} />
      <Route
        element={<PassdRecoveryConfirmPage />}
        path={APP_KEYS.ROUTER_KEYS.RECOVER_PASS_CONFIRM}
      />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
