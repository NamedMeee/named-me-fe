type SoicalAuthProviderType = 'KAKAO';

export type RedirectUrlParamsType = {
  code?: string;
  error?: string;
  error_description?: string;
  state?: string;
};

export type KakaoUserDataType = {
  connected_at: string;
  id: number;
  kakao_account: {
    email: string;
    email_needs_agreement: boolean;
    has_email: boolean;
    is_email_valid: boolean;
    is_email_verified: boolean;
    profile: {
      is_default_image: boolean;
      is_default_nickname: boolean;
      nickname: string;
      profile_image_url: string;
      thumbnail_image_url: string;
    };
    profile_image_needs_agreement: boolean;
    profile_nickname_needs_agreement: boolean;
  };
  properties: {
    nickname: string;
    profile_image: string;
    thumbnail_image: string;
  };
};
