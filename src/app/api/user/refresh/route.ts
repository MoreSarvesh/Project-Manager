import {
  generateAccessTokens,
  verifyUserRefreshToken,
} from "@/app/utils/helper";
import { cookies } from "next/headers";

export async function GET() {
  const refreshToken = cookies().get("refreshtoken")?.value;
  try {
    const { username } = await verifyUserRefreshToken(refreshToken as string);
    //console.log(username);
    const newAccessToken = await generateAccessTokens(username as string);

    return new Response(JSON.stringify({ newAccessToken }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid refresh token" }), {
      status: 401,
    });
  }
}
