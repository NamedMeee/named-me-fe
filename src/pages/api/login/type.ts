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
