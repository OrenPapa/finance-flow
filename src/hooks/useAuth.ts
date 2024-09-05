import { useState } from 'react';
import { auth, db } from '../firebase';
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { FirebaseError } from 'firebase/app';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import type User from '../models/user';
import { handleResponseMessage } from '../helpers/firebaseErrors';
import { calculateAge, validateField } from '../helpers/helperFunctions';
import type { RegistrationForm, SignInForm } from '../models/authForms';

interface UseAuthReturnType {
  loading: boolean;
  handleGoogleSignIn: () => Promise<void>;
  handleFacebookSignIn: () => Promise<void>;
  handleSignIn: (
    e: React.FormEvent<HTMLFormElement>,
    form: SignInForm,
    setError: React.Dispatch<React.SetStateAction<string>>,
  ) => Promise<void>;
  handleRegistrationSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    form: RegistrationForm,
    errors: RegistrationForm,
    setErrors: React.Dispatch<React.SetStateAction<RegistrationForm>>,
    termsAccepted: boolean,
  ) => Promise<void>;
}

export const useAuth = (): UseAuthReturnType => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userDocRef = doc(db, 'users', user.uid);
      const userSnapshot = await getDoc(userDocRef);

      if (!userSnapshot.exists()) {
        const newUser: User = {
          uid: user.uid,
          firstName: user.displayName?.split(' ')[0] ?? '',
          lastName: user.displayName?.split(' ').slice(1).join(' ') ?? '',
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          email: user.email!,
          birthDate: '',
          gender: 'O',
          createdAt: new Date(),
        };
        await setDoc(userDocRef, newUser);
      }

      navigate('/');
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  const handleFacebookSignIn = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userDocRef = doc(db, 'users', user.uid);
      const userSnapshot = await getDoc(userDocRef);

      if (!userSnapshot.exists()) {
        const newUser: User = {
          uid: user.uid,
          firstName: user.displayName?.split(' ')[0] ?? '',
          lastName: user.displayName?.split(' ').slice(1).join(' ') ?? '',
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          email: user.email!,
          birthDate: '',
          gender: 'O',
          createdAt: new Date(),
        };
        await setDoc(userDocRef, newUser);
      }

      navigate('/');
    } catch (error) {
      console.error('Facebook sign-in error:', error);
    }
  };

  const handleSignIn = async (
    e: React.FormEvent<HTMLFormElement>,
    form: SignInForm,
    setError: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate('/');
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        setError(handleResponseMessage(error.code));
      } else {
        setError('An unexpected error occurred');
      }
      setLoading(false);
    }
  };

  const handleRegistrationSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    form: RegistrationForm,
    errors: RegistrationForm,
    setErrors: React.Dispatch<React.SetStateAction<RegistrationForm>>,
    termsAccepted: boolean,
  ) => {
    e.preventDefault();
    if (!termsAccepted) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        termsAccepted: 'You must accept the terms and conditions.',
      }));
      return;
    }

    let hasError = false;
    const newErrors = { ...errors };
    Object.keys(form).forEach((key) => {
      const error = validateField(
        key,
        form[key as keyof typeof form] as string,
      );
      if (error) {
        newErrors[key as keyof typeof newErrors] = error;
        hasError = true;
      }
    });

    if (!form.birthDate) {
      newErrors.birthDate = 'Please select your birth date.';
      hasError = true;
    } else if (calculateAge(new Date(form.birthDate)) < 18) {
      newErrors.birthDate = 'You must be at least 18 years old to register.';
      hasError = true;
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password,
      );
      const user = userCredential.user;
      const formattedBirthDate = format(new Date(form.birthDate), 'dd/MM/yyyy');
      const newUser: User = {
        uid: user.uid,
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        birthDate: formattedBirthDate,
        gender: form.gender as 'M' | 'F' | 'O',
        createdAt: new Date(),
      };
      await setDoc(doc(db, 'users', user.uid), newUser);
      navigate('/sign-in');
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        setErrors({ ...errors, email: handleResponseMessage(error.code) });
      } else {
        setErrors({ ...errors, email: 'An unexpected error occurred.' });
      }
      setLoading(false);
    }
  };

  return {
    loading,
    handleGoogleSignIn,
    handleFacebookSignIn,
    handleSignIn,
    handleRegistrationSubmit,
  };
};
