interface ValidationRule {
  pattern: RegExp;
  message: string;
  emptyMessage: string;
}

type ValidationConfig = Record<string, ValidationRule | undefined>;

export const validationConfig: ValidationConfig = {
  firstName: {
    pattern: /^[A-Za-z]+$/,
    message: 'First name should only contain letters.',
    emptyMessage: 'First name is required.',
  },
  lastName: {
    pattern: /^[A-Za-z]+$/,
    message: 'Last name should only contain letters.',
    emptyMessage: 'Last name is required.',
  },
  // birthDate: {
  //   pattern: /^(?:1[89]|[2-9]\d)$/, // Allows only numbers 18 and above (up to 99)
  //   message: 'You must be at least 18 years old.',
  //   emptyMessage: 'Age is required.',
  // },
  gender: {
    pattern: /^(M|F|O)$/, // Only allows 'M', 'F', or 'O'
    message: 'Please select a valid gender.',
    emptyMessage: 'Gender is required.',
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address.',
    emptyMessage: 'Email is required.',
  },
  password: {
    pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    message:
      'Password must contain at least 8 characters, one uppercase letter, one number, and one special character.',
    emptyMessage: 'Password is required.',
  },
  confirmPassword: {
    pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    message: 'Password confirmation must match the above criteria.',
    emptyMessage: 'Please confirm your password.',
  },
};
