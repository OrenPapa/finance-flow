import { validationConfig } from '../../utils/validations';

export const calculateAge = (birthDate: Date | null): number => {
  if (!birthDate) return 0;
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    return age - 1;
  }
  return age;
};

export const validateField = (name: string, value: string): string => {
  const validation = validationConfig[name as keyof typeof validationConfig];

  if (!validation) {
    return '';
  }

  if (!value) {
    return validation.emptyMessage;
  }

  if (!validation.pattern.test(value)) {
    return validation.message;
  }

  // If the value passes all validations, return an empty string (no error)
  return '';
};
