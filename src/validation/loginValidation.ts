import { ValidationResult } from '@zustand/userLoginStore';
import { error } from 'console';

export const defaultErrorState = {
  error: false,
  errorMessage: '',
};

export const loginInputValidation = (
  stateName: string,
  payload: any,
): ValidationResult => {
  switch (stateName) {
    case 'email':
      return emailValidation(payload);
    case 'password':
      return passwordValidation(payload);
    default:
      return defaultErrorState;
  }
};

const emailValidation = (email: string) => {
  if (email.length === 0) {
    return {
      error: true,
      errorMessage: '이메일을 입력해주세요.',
    };
  }

  return defaultErrorState;
};

const passwordValidation = (password: string) => {
  if (password.length === 0) {
    return {
      error: true,
      errorMessage: '비밀번호를 입력해주세요.',
    };
  }

  return defaultErrorState;
};
