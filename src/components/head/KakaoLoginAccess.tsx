import Script from 'next/script';
import React from 'react';

export default function KakaoLoginAccess() {
  const kakaoInit = () => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    }
  };

  return (
    <Script
      crossOrigin="anonymous"
      integrity="sha384-l+xbElFSnPZ2rOaPrU//2FF5B4LB8FiX5q4fXYTlfcG4PGpMkE1vcL7kNXI6Cci0"
      src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.0/kakao.min.js"
      onLoad={kakaoInit}
    />
  );
}
