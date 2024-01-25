import Container from '@mui/material/Container';

import RegistrationForm from '../../common/components/auth/registration-form';
import { SPACES } from '../../theme';

const RegistrationPage = () => (
  <Container maxWidth="md" sx={{ paddingTop: SPACES.xxl }}>
    <RegistrationForm />
  </Container>
);

export default RegistrationPage;
