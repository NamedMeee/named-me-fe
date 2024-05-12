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

export type SocialProviderType = 'KAKAO' | 'TWITTER';

export type SocialSignInType = {
  provider: SocialProviderType;
  socialId: string;
};

export type SocialSignUpType = {
  email: string;
  userName: string;
  isVerifiedEmail: boolean;
  provider: SocialProviderType;
  socialId: string;
  serviceRequiredAgreement: boolean;
};

export type SocialCheckType = {
  email: string;
  provider: SocialProviderType;
  socialId: string;
};
