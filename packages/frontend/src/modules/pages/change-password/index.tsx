import Container from '@mui/material/Container';

import ChangePasswordForm from '../../common/components/auth/change-password-form';
import { SPACES } from '../../theme';

const ChangePasswordPage = () => (
  <Container maxWidth="md" sx={{ paddingTop: SPACES.xxl }}>
    <ChangePasswordForm />
  </Container>
);

export default ChangePasswordPage;
