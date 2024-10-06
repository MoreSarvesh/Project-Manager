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
