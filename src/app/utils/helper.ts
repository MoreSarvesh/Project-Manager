import jwt from "jsonwebtoken";

export function generateAccessTokens(username: string) {
  return jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRETE as string, {
    expiresIn: "1h",
  });
}

export function generateRefreshToken(username: string) {
  return jwt.sign({ username }, process.env.REFRESH_TOKEN_SECRETE as string, {
    expiresIn: "1d",
  });
}
