import React, { useState, type ReactElement } from 'react';
import { CircularProgress } from '@mui/material';
import {
  Container,
  Card,
  Title,
  Actions,
  SignInLink,
  Button,
  ExternalButton,
  ExternalLoginContainer,
  ExternalLoginText,
  StyledFacebookIcon,
  StyledGoogleIcon,
  TextField,
} from './styles';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import type { SignInForm } from '../../models/authForms';
import { InitialState } from './constants';
import { validateField } from '../../helpers/helperFunctions';

function SignIn(): ReactElement {
  const [form, setForm] = useState<SignInForm>(InitialState);
  const [errors, setErrors] = useState<SignInForm>(InitialState);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { loading, handleGoogleSignIn, handleFacebookSignIn, handleSignIn } =
    useAuth();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    setError('');
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  return (
    <Container>
      <Card>
        <Title>Sign In</Title>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <form
          autoComplete="off"
          onSubmit={async (e) => handleSignIn(e, form, setError)}
        >
          <TextField
            size="small"
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
          />
          <TextField
            size="small"
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleInputChange}
            onBlur={handleBlur}
            error={!!errors.password}
            helperText={errors.password}
            fullWidth
            autoComplete="off"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              'Sign In'
            )}
          </Button>
          <ExternalLoginText>Or sign in with:</ExternalLoginText>
          <ExternalLoginContainer>
            <ExternalButton
              variant="outlined"
              color="primary"
              startIcon={<StyledGoogleIcon />}
              onClick={handleGoogleSignIn}
            >
              Google
            </ExternalButton>
            <ExternalButton
              variant="outlined"
              color="primary"
              startIcon={<StyledFacebookIcon />}
              onClick={handleFacebookSignIn}
            >
              Facebook
            </ExternalButton>
          </ExternalLoginContainer>
        </form>
        <Actions>
          <p>
            Don&apos;t have an account?{' '}
            <SignInLink onClick={() => navigate('/register')}>
              Register here
            </SignInLink>
          </p>
        </Actions>
      </Card>
    </Container>
  );
}

export default SignIn;
