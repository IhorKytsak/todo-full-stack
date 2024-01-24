import { useFormik } from 'formik';
import { Avatar, Button, TextField, Box, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useQueryClient } from '@tanstack/react-query';

import { COLORS } from '../../../../theme';
import { recoverPasswordSchema } from '../../../../validation/user-validation.schema';
import { useRecoveryPasswordMutation } from '../../../hooks/use-auth-mutatiuns.hook';

const PasswordRecoveryForm = () => {
  const queryClient = useQueryClient();

  const { mutate } = useRecoveryPasswordMutation(queryClient);

  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: recoverPasswordSchema,
    onSubmit: (values) => {
      mutate(values);
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
        Recover Password
      </Typography>
      <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Recover Password
        </Button>
      </Box>
    </Box>
  );
};

export default PasswordRecoveryForm;
