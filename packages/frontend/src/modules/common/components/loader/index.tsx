import { Backdrop, CircularProgress } from '@mui/material';
import { COLORS } from '../../../theme';

const Loader = () => (
  <Backdrop sx={{ color: COLORS.white, zIndex: 20 }} open>
    <CircularProgress color="inherit" />
  </Backdrop>
);

export default Loader;
