const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

type Token = string;

function getToken(): Token {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
}
function saveToken(token: Token): void {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
}

function dropToken(): void {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
}

export type { Token };
export {
  getToken,
  saveToken,
  dropToken,
};
