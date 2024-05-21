export const getQueryString = (payload: { [T in string]: any }) => {
  Object.keys(payload)
    .filter((key) => !!payload[key])
    .map((key) => `${key}=${payload[key]}`)
    .join('&');
};

export const extractEmailPart = (email: string) => {
  const atIndex = email.indexOf('@');

  if (atIndex === -1) {
    throw new Error('잘못된 이메일 형식입니다.');
  }

  return email.slice(0, atIndex);
};
