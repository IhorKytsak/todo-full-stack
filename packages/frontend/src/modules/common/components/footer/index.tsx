import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { COLORS } from '../../../theme';

const Footer = () => (
  <Box
    sx={{
      backgroundColor: COLORS.primary,
      p: 3,
      marginTop: 'auto'
    }}
    component="footer"
  >
    <Container maxWidth="sm">
      <Typography variant="body2" color={COLORS.white} align="center">
        © {new Date().getFullYear()} All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
