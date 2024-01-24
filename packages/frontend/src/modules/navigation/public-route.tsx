import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../common/hooks/use-auth';
import { APP_KEYS } from '../common/consts';

const PublicRoute = () => {
  const { isLoggedIn } = useAuth();

  return !isLoggedIn ? <Outlet /> : <Navigate to={APP_KEYS.ROUTER_KEYS.HOME} replace />;
};

export default PublicRoute;
