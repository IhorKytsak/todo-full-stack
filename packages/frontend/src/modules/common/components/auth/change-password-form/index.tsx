import { useFormik } from 'formik';
import { Avatar, Button, TextField, Box, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useQueryClient } from '@tanstack/react-query';

import { useAuth } from '../../../hooks/use-auth';
import { useChangePasswordMutation } from '../../../hooks/use-auth-mutatiuns.hook';
import { changePasswordSchema } from '../../../../validation/user-validation.schema';
import { COLORS } from '../../../../theme';
import { initialChangePassValues } from '../../../consts';

const ChangePasswordForm = () => {
  const queryClient = useQueryClient();
  const { user, logout } = useAuth()!;

  const { mutate } = useChangePasswordMutation(queryClient, logout);

  const formik = useFormik({
    initialValues: initialChangePassValues,
    validationSchema: changePasswordSchema,
    onSubmit: (values) => {
      mutate({ ...values, id: user!.id });
    }
  });

  return (
    <Box
      sx={{
        marginY: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: COLORS.primary }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Change Password
      </Typography>
      <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
        <TextField
          required
          fullWidth
          margin="normal"
          name="oldPassword"
          label="Old Password"
          type="password"
          id="oldPassword"
          autoComplete="new-password"
          value={formik.values.oldPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.oldPassword && Boolean(formik.errors.oldPassword)}
          helperText={formik.touched.oldPassword && formik.errors.oldPassword}
        />

        <TextField
          required
          fullWidth
          margin="normal"
          name="newPassword"
          label="New Password"
          type="password"
          id="newPassword"
          autoComplete="new-password"
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
          helperText={formik.touched.newPassword && formik.errors.newPassword}
        />

        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Change Password
        </Button>
      </Box>
    </Box>
  );
};

export default ChangePasswordForm;
