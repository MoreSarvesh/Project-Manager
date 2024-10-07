import dbConnect from "@/dbConnection";
import { IProject } from "@/models/project";
import User from "@/models/user";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const username = req.headers.get("username");
  if (!username)
    return new Response(JSON.stringify({ error: "Invalid header" }), {
      status: 401,
    });

  let userProjects;

  try {
    dbConnect();
    userProjects = await User.findOne({ username }, "projects");
    console.log("users propjects: ", userProjects);
  } catch (error) {
    console.log("Error: ", error);
    return new Response(JSON.stringify({ error: "Server Error" }), {
      status: 500,
    });
  }

  return Response.json({ data: { projects: userProjects }, msg: "ok" });
}

export async function POST(req: NextRequest) {
  const username = req.headers.get("username");
  if (!username)
    return new Response(JSON.stringify({ error: "Invalid header" }), {
      status: 401,
    });

  const { title } = await req.json();
  //console.log("products: ", title);

  try {
    const user = await User.findOne({ username });
    if (!user)
      return new Response(JSON.stringify({ error: "Cannot find user" }), {
        status: 500,
      });

    const newProject: IProject = {
      title,
      progression: 0,
      tasks: [],
    };

    user.projects.push(newProject);
    const updatedUser = await user.save();

    return Response.json({
      data: { projects: updatedUser.projects, user: updatedUser },
      msg: "Project added",
    });
  } catch (error) {
    console.log("Error: ", error);
    return new Response(JSON.stringify({ error: "Server Error" }), {
      status: 500,
    });
  }
}

export async function DELETE(req: NextRequest) {
  const username = req.headers.get("username");
  if (!username)
    return new Response(JSON.stringify({ error: "Invalid header" }), {
      status: 401,
    });

  const { title } = await req.json();

  try {
    const user = await User.findOne({ username });
    if (!user)
      return new Response(JSON.stringify({ error: "Cannot find user" }), {
        status: 500,
      });

    const updatedProjectList = user.projects.filter(
      (project) => project.title !== title
    );
    user.projects = updatedProjectList;
    const updatedUser = await user.save();

    return Response.json({
      data: { projects: updatedUser.projects, user: updatedUser },
      msg: "Projected deleted",
    });
  } catch (error) {
    console.log("Error: ", error);
    return new Response(JSON.stringify({ error: "Server Error" }), {
      status: 500,
    });
  }
}
