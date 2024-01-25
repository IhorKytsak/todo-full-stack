import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { Avatar, Button, TextField, Grid, Box, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useQueryClient } from '@tanstack/react-query';

import { useRegisterMutation } from '../../../hooks/use-auth-mutatiuns.hook';
import { userFormSchema } from '../../../../validation/user-validation.schema';
import { COLORS } from '../../../../theme';
import { APP_KEYS, initialAuthValues } from '../../../consts';
import { SIZES } from '../../../../theme/fonts.const';

const RegistrationForm = () => {
  const queryClient = useQueryClient();

  const { mutate } = useRegisterMutation(queryClient);

  const formik = useFormik({
    initialValues: initialAuthValues,
    validationSchema: userFormSchema,
    onSubmit: (values) => {
      mutate(values);
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
        Sign up
      </Typography>
      <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
        <TextField
          required
          fullWidth
          margin="normal"
          label="Email Address"
          id="email"
          name="email"
          autoComplete="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          required
          fullWidth
          margin="normal"
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link
              style={{ color: COLORS.primary, fontSize: SIZES.s }}
              to={APP_KEYS.ROUTER_KEYS.SIGN_IN}
            >
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default RegistrationForm;
