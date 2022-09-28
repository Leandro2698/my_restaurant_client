import React, { useState } from 'react';
import * as Yup from 'yup';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Stack, IconButton, InputAdornment, Typography, Link,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import FormProvider from '../components/Form/FormProvider';
import FormTextField from '../components/Form/FormTextField';

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstname: Yup.string().required('First name required'),
    lastname: Yup.string().required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    passwordConfirmation: Yup.string().required('Please confirm your password.').oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const defaultValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  // console.log('method', methods.getValues('firstname'));

  const onSubmit = async () => {
    navigate('/', { replace: true });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <FormTextField name="firstname" label="First name" />
          <FormTextField name="lastname" label="Last name" />
        </Stack>

        <FormTextField name="email" label="Email address" />

        <FormTextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}

                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <FormTextField
          name="passwordConfirmation"
          label="Confirm password"
          type={showPassword ? 'text' : 'passwordConfirmation'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => setShowConfPassword(!showConfPassword)}>
                  {showConfPassword ? <VisibilityOff /> : <Visibility />}

                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Register
        </LoadingButton>
      </Stack>
      <Typography variant="body1" color="initial">
        Already have an account?
        <Link variant="subtitle2" component={RouterLink} to="/login">
          Login
        </Link>
      </Typography>

    </FormProvider>
  );
}
export default Register;
