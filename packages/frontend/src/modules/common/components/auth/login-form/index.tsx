import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { Avatar, Button, TextField, Grid, Box, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { useAuth } from '../../../hooks/use-auth';
import { COLORS } from '../../../../theme';
import { userFormSchema } from '../../../../validation/user-validation.schema';
import { APP_KEYS, initialAuthValues } from '../../../consts';
import { SIZES } from '../../../../theme/fonts.const';

const LoginForm = () => {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialAuthValues,
    validationSchema: userFormSchema,
    onSubmit: (values) => {
      login(values);
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
        Sign in
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
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link
              to={APP_KEYS.ROUTER_KEYS.RECOVER_PASS}
              style={{ color: COLORS.primary, fontSize: SIZES.s }}
            >
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link
              to={APP_KEYS.ROUTER_KEYS.SIGN_UP}
              style={{ color: COLORS.primary, fontSize: SIZES.s }}
            >
              Don&#39;t have an account? Sign Up
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LoginForm;
