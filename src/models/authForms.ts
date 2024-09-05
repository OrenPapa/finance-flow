export interface RegistrationForm {
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignInForm {
  email: string;
  password: string;
}
