import Container from '@mui/material/Container';

import PasswordRecoveryForm from '../../common/components/auth/password-recovery-form';
import { SPACES } from '../../theme';

const PasswordRecoveryPage = () => (
  <Container maxWidth="md" sx={{ paddingTop: SPACES.xxl }}>
    <PasswordRecoveryForm />
  </Container>
);

export default PasswordRecoveryPage;
