interface TokenType {
  accessToken: string;
  refreshToken: string;
}

export const storeAuth = function (token: TokenType) {
  try {
    localStorage.setItem('authTokens', JSON.stringify(token));
  } catch (e) {}
};
