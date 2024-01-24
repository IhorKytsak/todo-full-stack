import Container from '@mui/material/Container';

import PassRecoveryConfirmationForm from '../../common/components/auth/password-recovery-confirm-form';
import { SPACES } from '../../theme';

const PassdRecoveryConfirmPage = () => (
  <Container maxWidth="md" sx={{ paddingTop: SPACES.xxl }}>
    <PassRecoveryConfirmationForm />
  </Container>
);

export default PassdRecoveryConfirmPage;
