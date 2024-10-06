import { generateAccessTokens, generateRefreshToken } from "@/app/utils/helper";
import dbConnect from "@/dbConnection";
import User from "@/models/user";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const { username, email, password } = await req.json();
  if (!username || !email || !password) {
    return new Response("Fields cannot be empty", {
      status: 400,
    });
  }

  try {
    await dbConnect();
  } catch (error) {
    console.log("DB connection error: ", error);
    return new Response(JSON.stringify(error), { status: 500 });
  }

  try {
    const userExists = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (userExists)
      return new Response("Username already exists", { status: 409 });
  } catch (error) {
    console.log("Error: ", error);
    return new Response(JSON.stringify(error), { status: 500 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const accessToken = await generateAccessTokens(username);

  const refreshToken = await generateRefreshToken(username);

  try {
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      refreshToken,
    });
    return new Response(
      JSON.stringify({
        data: { newUser, accessToken },
        message: "user registered successfully",
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 201,
      }
    );
  } catch (error) {
    console.log("Error: ", error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
