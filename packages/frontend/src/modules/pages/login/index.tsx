import Container from '@mui/material/Container';

import LoginForm from '../../common/components/auth/login-form';
import { SPACES } from '../../theme';

const RegistrationPage = () => (
  <Container maxWidth="md" sx={{ paddingTop: SPACES.xxl }}>
    <LoginForm />
  </Container>
);

export default RegistrationPage;
