import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import { Avatar, Button, TextField, Box, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useQueryClient } from '@tanstack/react-query';

import { COLORS } from '../../../../theme';
import { recoverConfirmationPasswordSchema } from '../../../../validation/user-validation.schema';
import { useRecoveryPassConfirmedMutation } from '../../../hooks/use-auth-mutatiuns.hook';

const PassRecoveryConfirmationForm = () => {
  const { id, token } = useParams();
  const queryClient = useQueryClient();

  const { mutate } = useRecoveryPassConfirmedMutation(queryClient);

  const formik = useFormik({
    initialValues: { password: '' },
    validationSchema: recoverConfirmationPasswordSchema,
    onSubmit: ({ password }) => {
      mutate({ id: Number(id), token: token!, password });
    }
  });

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: COLORS.primary }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Enter new password
      </Typography>
      <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Submit password
        </Button>
      </Box>
    </Box>
  );
};

export default PassRecoveryConfirmationForm;
