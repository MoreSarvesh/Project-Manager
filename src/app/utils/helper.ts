import { SignJWT, jwtVerify } from "jose";

export async function generateAccessTokens(username: string) {
  const secrete = new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRETE);

  return await new SignJWT({ username })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1h")
    .sign(secrete);
}

export async function generateRefreshToken(username: string) {
  const secrete = new TextEncoder().encode(process.env.REFRESH_TOKEN_SECRETE);

  return await new SignJWT({ username })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1d")
    .sign(secrete);
}

export async function verifyUserAccessToken(accessToken: string) {
  const secret = new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRETE);

  const { payload } = await jwtVerify(accessToken, secret);

  return payload;
}

export async function verifyUserRefreshToken(refreshToken: string) {
  const secret = new TextEncoder().encode(process.env.REFRESH_TOKEN_SECRETE);

  const { payload } = await jwtVerify(refreshToken, secret);

  return payload;
}

export const refreshAccessToken = async () => {
  let response = await fetch("http://localhost:3000/api/user/refresh");

  if (!response.ok) {
    console.log("could not get new refresh token");
    const error = await response.json();
    throw new Error(JSON.stringify(error?.error));
  }
  const data = await response.json();
  console.log("newAccessToken: ", data.newAccessToken);

  return data.newAccessToken;
};

export const fetchData: (
  path: string,
  token: string,
  abortSignal: AbortSignal
) => Promise<Response> = async (
  path: string,
  token: string,
  signal: AbortSignal
) => {
  let response = await fetch(`http://localhost:3000/api/${path}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
    signal: signal,
  });

  return response;
};
