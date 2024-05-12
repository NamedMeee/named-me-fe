import { ValidationResult } from '@zustand/usersLoginStore';

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
    case 'firstPassword':
      return firstPasswordValidation(payload);
    case 'name':
      return nameValidation(payload);
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

const nameValidation = (name: string) => {
  if (name.length === 0) {
    return {
      error: true,
      errorMessage: '아이디를 입력해주세요.',
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

const firstPasswordValidation = ({
  firstPassword,
  password,
}: {
  firstPassword: string;
  password: string;
}) => {
  if (firstPassword?.length === 0) {
    return {
      error: true,
      errorMessage: '비밀번호를 입력해주세요.',
    };
  }

  if (firstPassword !== password) {
    return {
      error: true,
      errorMessage: '비밀번호가 일치하지 않습니다.',
    };
  }

  return defaultErrorState;
};
