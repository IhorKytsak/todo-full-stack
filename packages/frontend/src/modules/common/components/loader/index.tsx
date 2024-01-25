import { Backdrop, Box, CircularProgress } from '@mui/material';
import { COLORS } from '../../../theme';

export const Loader = () => (
  <Box
    sx={{
      color: COLORS.primary,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      my: 6
    }}
  >
    <CircularProgress color="inherit" />
  </Box>
);

export const BackdropLoader = () => (
  <Backdrop sx={{ color: COLORS.white, zIndex: 20 }} open>
    <CircularProgress color="inherit" />
  </Backdrop>
);
