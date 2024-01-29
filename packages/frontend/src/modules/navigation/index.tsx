import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { APP_KEYS } from '../common/consts';
import ProtectedRoute from './protected-route';
import PublicRoute from './public-route';
import { BackdropLoader } from '../common/components/loader';

const HomePage = lazy(() => import('../pages/home'));
const TodoPage = lazy(() => import('../pages/todo'));
const LoginPage = lazy(() => import('../pages/login'));
const RegistrationPage = lazy(() => import('../pages/registration'));
const PasswordRecoveryPage = lazy(() => import('../pages/password-recovery'));
const PassdRecoveryConfirmPage = lazy(() => import('../pages/pass-recovery-confirmation'));
const ChangePasswordPage = lazy(() => import('../pages/change-password'));
const PublicTodosPage = lazy(() => import('../pages/public-todos'));
const NotFoundPage = lazy(() => import('../pages/not-found'));

export const MainRouter = () => (
  <Suspense fallback={<BackdropLoader />}>
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
  </Suspense>
);
