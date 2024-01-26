import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';

import { COLORS } from '../../../theme';
import { APP_KEYS, navigationItems } from '../../consts';
import { useAuth } from '../../hooks/use-auth';
import DropdownMenu from './dropdown-menu';
import { SIZES } from '../../../theme/fonts.const';

const Header = () => {
  const { logout, isLoggedIn, user } = useAuth();

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: COLORS.primary,
          fontSize: { xs: SIZES.s, sm: SIZES.m, md: SIZES.l }
        }}
      >
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1, fontSize: 'inherit' }}>
            <Link style={{ color: COLORS.white }} to={APP_KEYS.ROUTER_KEYS.HOME}>
              {navigationItems.APPNAME}
            </Link>
          </Typography>
          <Box sx={{ color: COLORS.white }}>
            {isLoggedIn && user ? (
              <DropdownMenu email={user.email} signOutHandler={logout} />
            ) : (
              <>
                <Link to={APP_KEYS.ROUTER_KEYS.PUBLIC_TODOS}>
                  <Button sx={{ color: COLORS.white, fontSize: 'inherit' }}>
                    {navigationItems.PUBLIC_TODOS}
                  </Button>
                </Link>
                <Link to={APP_KEYS.ROUTER_KEYS.SIGN_IN}>
                  <Button sx={{ color: COLORS.white, fontSize: 'inherit' }}>
                    {navigationItems.SIGNIN}
                  </Button>
                </Link>
                <Link to={APP_KEYS.ROUTER_KEYS.SIGN_UP}>
                  <Button sx={{ color: COLORS.white, fontSize: 'inherit' }}>
                    {navigationItems.SIGNUP}
                  </Button>
                </Link>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
