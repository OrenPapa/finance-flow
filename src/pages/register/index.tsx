import React, { useState, useEffect, type ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  type SelectChangeEvent,
  CircularProgress,
  IconButton,
  InputAdornment,
} from '@mui/material';
import {
  Container,
  Card,
  Title,
  Subtitle,
  Actions,
  LinkText,
  TextField,
  Button,
  Divider,
  CheckboxContainer,
  Checkbox,
  ExternalLoginContainer,
  ExternalLoginText,
  ExternalButton,
  StyledGoogleIcon,
  StyledFacebookIcon,
} from './styles';
import { calculateAge, validateField } from '../../helpers/helperFunctions';
import { InitialState } from './constant';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useAuth } from '../../hooks/useAuth';
import type { RegistrationForm } from '../../models/authForms';

function Register(): ReactElement {
  const [form, setForm] = useState<RegistrationForm>(InitialState);
  const [errors, setErrors] = useState<RegistrationForm>(InitialState);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  const {
    loading,
    handleGoogleSignIn,
    handleFacebookSignIn,
    handleRegistrationSubmit,
  } = useAuth();

  useEffect(() => {
    checkFormValidity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, errors, termsAccepted]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const birthDate = e.target.value;
    const error =
      birthDate && calculateAge(new Date(birthDate)) < 18
        ? 'You must be at least 18 years old.'
        : '';
    setForm({ ...form, birthDate });
    setErrors({
      ...errors,
      birthDate: error || (birthDate ? '' : 'Please select your birth date.'),
    });
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    setForm({ ...form, [e.target.name as string]: e.target.value });
  };

  const handleTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAccepted(e.target.checked);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const checkFormValidity = () => {
    let isValid = true;
    for (const key in errors) {
      if (errors[key as keyof RegistrationForm]) {
        isValid = false;
        break;
      }
    }
    for (const key in form) {
      if (form[key as keyof RegistrationForm] === '') {
        isValid = false;
        break;
      }
    }
    if (!termsAccepted) {
      isValid = false;
    }
    if (form.password !== form.confirmPassword) {
      isValid = false;
    }
    setIsFormValid(isValid);
  };

  return (
    <Container>
      <Card>
        <Title>Register</Title>
        <Subtitle>Enter your details to register</Subtitle>
        <form
          onSubmit={async (e) =>
            handleRegistrationSubmit(e, form, errors, setErrors, termsAccepted)
          }
          autoComplete="off"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            marginTop: '20px',
          }}
        >
          <input type="text" style={{ display: 'none' }} />
          <input type="password" style={{ display: 'none' }} />

          <TextField
            size="small"
            label="First Name"
            name="firstName"
            value={form.firstName}
            onChange={handleInputChange}
            onBlur={handleBlur}
            fullWidth
            error={!!errors.firstName}
            helperText={errors.firstName}
            autoComplete="off"
          />
          <TextField
            size="small"
            label="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={handleInputChange}
            onBlur={handleBlur}
            fullWidth
            error={!!errors.lastName}
            helperText={errors.lastName}
            autoComplete="off"
          />
          <TextField
            size="small"
            label="Birth Date"
            name="birthDate"
            type="date"
            value={form.birthDate}
            onChange={handleDateChange}
            onBlur={handleBlur}
            fullWidth
            InputLabelProps={{ shrink: true }}
            error={!!errors.birthDate}
            helperText={errors.birthDate}
            autoComplete="off"
          />
          <FormControl size="small" fullWidth error={!!errors.gender}>
            <InputLabel>Gender</InputLabel>
            <Select
              label="Gender"
              name="gender"
              value={form.gender}
              onChange={handleSelectChange}
              onBlur={handleBlur}
              autoComplete="off"
            >
              <MenuItem value="M">Male</MenuItem>
              <MenuItem value="F">Female</MenuItem>
              <MenuItem value="O">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            size="small"
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            fullWidth
            error={!!errors.email}
            helperText={errors.email}
            autoComplete="off"
          />
          <TextField
            size="small"
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={form.password}
            onChange={handleInputChange}
            onBlur={handleBlur}
            fullWidth
            autoComplete="new-password"
            error={!!errors.password}
            helperText={errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            size="small"
            label="Confirm Password"
            name="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            value={form.confirmPassword}
            onChange={handleInputChange}
            onBlur={handleBlur}
            fullWidth
            autoComplete="new-password"
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleShowConfirmPassword} edge="end">
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <CheckboxContainer>
            <Checkbox
              checked={termsAccepted}
              onChange={handleTermsChange}
              color="primary"
            />
            <span>
              I accept the{' '}
              <LinkText onClick={() => navigate('/terms')}>
                terms & conditions
              </LinkText>
            </span>
          </CheckboxContainer>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={!isFormValid || loading}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              'Register'
            )}
          </Button>

          <Divider />

          <Actions>
            <span>
              Already registered?{' '}
              <LinkText onClick={() => navigate('/sign-in')}>
                Sign in instead
              </LinkText>
            </span>
          </Actions>
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
      </Card>
    </Container>
  );
}

export default Register;
