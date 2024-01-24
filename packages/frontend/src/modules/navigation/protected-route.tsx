import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../common/hooks/use-auth';
import { APP_KEYS } from '../common/consts';

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Outlet /> : <Navigate to={APP_KEYS.ROUTER_KEYS.SIGN_IN} replace />;
};

export default ProtectedRoute;
