import { Box, Typography } from '@mui/material';
import { COLORS, SPACES } from '../../../../theme';
import { SIZES } from '../../../../theme/fonts.const';

const TodosEmpty = () => (
  <Box
    sx={{
      display: 'flex',
      bgcolor: COLORS.primary,
      justifyContent: 'center',
      my: SPACES.l
    }}
  >
    <Typography
      sx={{
        color: COLORS.white,
        fontSize: SIZES.l,
        p: 2
      }}
    >
      No todos found
    </Typography>
  </Box>
);

export default TodosEmpty;
