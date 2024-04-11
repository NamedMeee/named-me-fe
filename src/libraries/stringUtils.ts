export const getQueryString = (payload: { [T in string]: any }) => {
  Object.keys(payload)
    .filter((key) => !!payload[key])
    .map((key) => `${key}=${payload[key]}`)
    .join('&');
};
