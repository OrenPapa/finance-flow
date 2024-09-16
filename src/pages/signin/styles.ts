import {
  Card as MuiCard,
  TextField as MuiTextField,
  Button as MuiButton,
  Box,
  styled,
  Typography,
  Link,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

// Use the theme for colors and other style properties
export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
}));

export const Card = styled(MuiCard)(({ theme }) => ({
  width: '100%',
  maxWidth: '350px',
  padding: '20px',
  borderRadius: '12px',
  backgroundColor: theme.palette.common.white,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

export const Title = styled(Typography)(({ theme }) => ({
  margin: 0,
  textAlign: 'center',
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  marginBottom: '16px',
}));

export const Actions = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '15px',
});

export const SignInLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  cursor: 'pointer',
  textDecoration: 'none',
  fontWeight: 500,
  fontSize: '0.875rem',
  '&:hover': {
    filter: 'brightness(1.1)',
  },
}));

export const TextField = styled(MuiTextField)({
  marginBottom: '16px',
  '& .MuiInputBase-root': {
    fontSize: '0.875rem',
    height: '40px',
  },
});

export const Button = styled(MuiButton)({
  fontSize: '0.875rem',
  padding: '8px 16px',
  marginBottom: '16px',
});

export const ExternalLoginContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const ExternalLoginText = styled(Box)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  fontSize: '0.875rem',
  marginTop: '15px',
  padding: 0,
  color: theme.palette.text.primary,
  height: 'fit-content',
  marginBottom: '16px',
}));

export const ExternalButton = styled(MuiButton)({
  width: 'calc(50% - 5px)',
  display: 'flex',
  justifyContent: 'center',
  lineHeight: '25px',
  marginBottom: '16px',
});

export const StyledGoogleIcon = styled(GoogleIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const StyledFacebookIcon = styled(FacebookIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
