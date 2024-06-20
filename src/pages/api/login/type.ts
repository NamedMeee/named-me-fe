export type SignInPayloadType = {
  email: string;
  password: string;
};

export type SignUpPayloadType = SignInPayloadType & {
  name: string;
};

export type PreCheckParamType = {
  email: string;
  name: string;
};

export type SocialSignInType = {
  provider: SocialProviderType;
  socialId: string;
};

export type SocialSignUpType = {
  email: string;
  userName: string;
  provider: SocialProviderType;
  socialId: string;
  serviceRequiredAgreement: boolean;
};

export type SocialCheckType = {
  email: string;
  provider: SocialProviderType;
  socialId: string;
};

export type GetSocialUserInfoType = {
  email?: string;
  id: string;
  image: string;
  name: string;
};

// DEFAULT는 ERROR 값
export type SocialProviderType = 'KAKAO' | 'TWITTER' | 'DEFAULT';

export type SocialCheckStateType = 'SOCIAL_USER' | 'USER' | 'INVALID';
