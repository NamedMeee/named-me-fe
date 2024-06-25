export const SESSION_KEY = {
  LOGIN_TOKEN: 'namedme_token',
  SOCIAL_USER_DATA: 'socialUserData',
  LOGIN_PROVIDER: 'loginProvider',
  USER_TOKEN: 'namedme_token',
};

export const getSessionStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    const result = sessionStorage.getItem(key);

    if (result !== 'undefined' && result !== 'null' && result) {
      return JSON.parse(result);
    }

    return null;
  }
};

export const setSessionStorage = (key: string, data: string | object) => {
  typeof window !== 'undefined' &&
    sessionStorage.setItem(key, JSON.stringify(data));
};

export const removeSessionStorage = (key: string) => {
  typeof window !== 'undefined' && sessionStorage.removeItem(key);
};

export const removeAllSessionStorage = () => {
  const keys = Object.keys(sessionStorage).filter(
    (key) => key.indexOf('temporary') >= 0,
  );
  keys.length && keys.map((k) => removeSessionStorage(k));
};
