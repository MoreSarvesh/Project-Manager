import bcrypt from "bcrypt";
import { generateAccessTokens } from "@/app/utils/helper";
import dbConnect from "@/dbConnection";
import User from "@/models/user";

export async function POST(req: Request) {
  const { username, password } = await req.json();
  if (!username || !password)
    return new Response("Username and Password cannot be empty", {
      status: 400,
    });

  try {
    await dbConnect();
  } catch (error) {
    console.log("DB connection error: ", error);
    return new Response(JSON.stringify(error), { status: 500 });
  }

  try {
    const user = await User.findOne({ username });

    if (!user) return new Response("User does not exists", { status: 400 });

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch)
      return new Response("Password does not match", { status: 400 });

    const accessToken = generateAccessTokens(username);

    return new Response(
      JSON.stringify({
        data: { user, accessToken },
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
