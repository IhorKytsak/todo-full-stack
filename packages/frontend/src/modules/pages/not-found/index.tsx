import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { APP_KEYS, actionButtonNames } from '../../common/consts';
import { COLORS } from '../../theme';

const NotFoundPage = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      minHeight: 'calc(100vh - 64px)',
      backgroundColor: COLORS.purple
    }}
  >
    <Typography variant="h1" sx={{ color: COLORS.white }}>
      404
    </Typography>
    <Typography variant="h6" sx={{ color: COLORS.white }}>
      The page you’re looking for doesn’t exist.
    </Typography>
    <Link to={APP_KEYS.ROUTER_KEYS.HOME}>
      <Button variant="contained">{actionButtonNames.backHome}</Button>
    </Link>
  </Box>
);

export default NotFoundPage;
