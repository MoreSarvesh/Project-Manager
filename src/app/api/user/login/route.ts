import bcrypt from "bcrypt";
import { generateAccessTokens, generateRefreshToken } from "@/app/utils/helper";
import dbConnect from "@/dbConnection";
import User from "@/models/user";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const { username, password } = await req.json();
  if (!username || !password)
    return new Response(
      JSON.stringify({ error: "Username and Password cannot be empty" }),
      {
        status: 400,
      }
    );

  try {
    await dbConnect();
  } catch (error) {
    console.log("DB connection error: ", error);
    return new Response(JSON.stringify({ error }), { status: 500 });
  }

  try {
    const user = await User.findOne({ username });

    if (!user)
      return new Response(
        JSON.stringify({
          error: "User does not exists",
        }),
        { status: 400 }
      );

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch)
      return new Response(
        JSON.stringify({
          error: "Password do not match",
        }),
        { status: 400 }
      );

    const accessToken = await generateAccessTokens(username);
    const refreshToken = await generateRefreshToken(username);

    cookies().set("refreshtoken", refreshToken);

    user.refreshToken = refreshToken;
    const updatedUser = await user.save();

    console.log("accessoken: ", accessToken);

    return new Response(
      JSON.stringify({
        data: { user: updatedUser, accessToken },
        message: "Login successful",
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 200,
      }
    );
  } catch (error) {
    console.log("Error: ", error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
