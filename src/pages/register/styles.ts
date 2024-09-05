import styled from 'styled-components';
import {
  Card as MuiCard,
  TextField as MuiTextField,
  Button as MuiButton,
  Divider as MuiDivider,
  Checkbox as MuiCheckbox,
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
  max-width: 380px;
  padding: 20px;
  margin: 10px;
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
  color: var(--primary-color);
  margin: 0;
  text-align: center;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  text-align: center;
  margin-top: 8px;
  color: var(--secondary-color-dark);
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LinkText = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
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
  color: var(--secondary-text-color);
`;

export const Divider = styled(MuiDivider)`
  width: 100%;
  margin: 10px 0;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Checkbox = styled(MuiCheckbox)``;

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
  line-height: 21px;
`;

export const StyledGoogleIcon = styled(GoogleIcon)`
  color: var(--primary-color);
`;

export const StyledFacebookIcon = styled(FacebookIcon)`
  color: var(--primary-color);
`;
