import {
  Card as MuiCard,
  TextField as MuiTextField,
  Button as MuiButton,
  Divider as MuiDivider,
  Checkbox as MuiCheckbox,
  styled,
  Box,
  FormControl,
  Typography,
  Link,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
}));

export const Card = styled(MuiCard)(({ theme }) => ({
  width: '100%',
  maxWidth: '380px',
  padding: '20px',
  margin: '10px',
  borderRadius: '12px',
  backgroundColor: theme.palette.common.white,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

export const Form = styled(FormControl)({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  marginTop: '20px',
});

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  margin: 0,
  textAlign: 'center',
  fontWeight: 'bold',
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginTop: '8px',
  color: theme.palette.secondary.dark,
}));

export const Actions = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const LinkText = styled(Link)({
  cursor: 'pointer',
  textDecoration: 'none',
  fontWeight: 500,
  '&:hover': {
    filter: 'brightness(1.1)',
  },
});

export const TextField = styled(MuiTextField)({
  '& .MuiInputBase-root': {
    fontSize: '0.875rem',
    height: '40px',
  },
});

export const Button = styled(MuiButton)(({ theme }) => ({
  fontSize: '0.875rem',
  padding: '8px 16px',
  marginTop: '12px',
  color: theme.palette.text.secondary,
}));

export const Divider = styled(MuiDivider)({
  width: '100%',
  margin: '10px 0',
});

export const CheckboxContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const Checkbox = styled(MuiCheckbox)({});

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
}));

export const ExternalButton = styled(MuiButton)({
  width: 'calc(50% - 5px)',
  display: 'flex',
  justifyContent: 'center',
  lineHeight: '21px',
});

export const StyledGoogleIcon = styled(GoogleIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const StyledFacebookIcon = styled(FacebookIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
