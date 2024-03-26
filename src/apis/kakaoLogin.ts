import axios from 'axios';
import pureAxios from 'axios';
import { getQueryString } from 'libraries/stringUtils';
import Router from 'next/router';
import { KakaoUserDataType, RedirectUrlParamsType } from 'type/login';

export const getKakaoUserData = async ({
  code,
  error,
  error_description,
}: RedirectUrlParamsType) => {
  if (isValidParam({ code, error, error_description })) {
    await fetchKakaoAcessToken(code!);
    return await fetchKakaoUserData();
  }
};

const isValidParam = ({
  code,
  error,
  error_description,
}: RedirectUrlParamsType) => {
  if (!!code && !error) {
    return true;
  }

  if (error === 'access_denied') {
    Router.replace('/login');
    return false;
  }

  alert(
    `카카오 로그인 중 오류가 발생했습니다. [${error}] ${error_description}`,
  );
  Router.replace('/login');
  return false;
};

const fetchKakaoUserData = async () => {
  const userData = window.Kakao.API.request({
    url: '/v2/user/me',
  })
    .then(function (res: any) {
      const { kakao_account } = res;
      const { profile } = kakao_account;

      return {
        email: kakao_account.email,
        is_email_verified: kakao_account.is_email_verified,
        userName: profile.nickname,
        provider: 'KAKAO',
        profile_image: profile.profile_image_url,
      };
    })
    .catch(function (err: any) {
      alert(`사용자 조회에 실패했습니다. [${err.code}] ${err.msg}`);
      Router.replace('/login');
    });

  return userData;
};

export const fetchKakaoAcessToken = async (code: string) => {
  try {
    const headers = {
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    };

    const query = `grant_type=authorization_code&client_id=${
      process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY
    }&redirect_uri=${
      location.origin + location.pathname
    }&code=${code}&client_secret=`;

    const { data } = await pureAxios.post(
      `https://kauth.kakao.com/oauth/token?${query}`,
      null,
      { headers },
    );

    window.Kakao.Auth.setAccessToken(data.access_token);
  } catch (e: any) {
    alert('토근 발급에 실패하였습니다.');
    window.location.assign('/login');
  }
};
