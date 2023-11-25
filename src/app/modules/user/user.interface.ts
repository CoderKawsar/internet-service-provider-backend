export type ILoginInfo = {
  email: string;
  password: string;
};

export type IRefreshTokenResponse = {
  accessToken: string;
};

export type IFeedBackPayload = {
  name: string;
  email: string;
  message: string;
};
