import styled from 'styled-components';
import {
  Card as MuiCard,
  TextField as MuiTextField,
  Button as MuiButton,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
`;

export const Card = styled(MuiCard)`
  width: 100%;
  max-width: 350px;
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

export const Title = styled.h2`
  margin: 0;
  text-align: center;
  color: var(--primary-color);
  font-weight: bold;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

export const SignInLink = styled.a`
  color: var(--primary-color);
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const TextField = styled(MuiTextField)`
  & .MuiInputBase-root {
    font-size: 0.875rem;
    height: 40px;
  }
`;

export const Button = styled(MuiButton)`
  font-size: 0.875rem;
  padding: 8px 16px;
  margin-top: 12px;
`;

export const ExternalLoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ExternalLoginText = styled.span`
  width: 100%;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 15px;
  padding: 0;
  color: var(--primary-text-color);
  height: fit-content;
`;

export const ExternalButton = styled(MuiButton)`
  width: calc(50% - 5px);
  display: flex;
  justify-content: center;
  line-height: 25px;
`;

export const StyledGoogleIcon = styled(GoogleIcon)`
  color: var(--primary-color);
`;

export const StyledFacebookIcon = styled(FacebookIcon)`
  color: var(--primary-color);
`;
