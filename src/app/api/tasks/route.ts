import dbConnect from "@/dbConnection";
import { ITask } from "@/models/task";
import User from "@/models/user";
import { NextRequest } from "next/server";

export type TaskDataType = {
  task: ITask;
  project: string;
};

export async function GET(req: NextRequest) {
  const username = req.headers.get("username");
  if (!username)
    return new Response(JSON.stringify({ error: "Invalid header" }), {
      status: 401,
    });

  try {
    dbConnect();
    const user = await User.findOne({ username });
    if (!user)
      return new Response(JSON.stringify({ error: "Cannot find user" }), {
        status: 500,
      });

    let allTask = [] as TaskDataType[];

    for (let i = 0; i < user.projects.length; i++) {
      for (let j = 0; j < user.projects[i].tasks.length; j++) {
        let newTask: TaskDataType = {
          task: user.projects[i].tasks[j],
          project: user.projects[i].title,
        };

        allTask.push(newTask);
      }
    }

    return Response.json({ data: allTask, msg: "ok" });
  } catch (error) {
    console.log("Error: ", error);
    return new Response(JSON.stringify({ error: "Server Error" }), {
      status: 500,
    });
  }
}

export async function POST(req: NextRequest) {
  const username = req.headers.get("username");
  if (!username)
    return new Response(JSON.stringify({ error: "Invalid header" }), {
      status: 401,
    });

  const { projectTitle, TaskTitle, taskPriority } = await req.json();
  //console.log({ projectTitle, title, taskPriority });

  try {
    dbConnect();
    const user = await User.findOne({ username }, "projects");
    if (!user)
      return new Response(JSON.stringify({ error: "Cannot find user" }), {
        status: 500,
      });

    user.projects.map((project) => {
      if (project.title === projectTitle) {
        const newTask: ITask = {
          title: TaskTitle,
          priority: taskPriority,
          isCompleted: false,
        };
        project.tasks.push(newTask);
      }
      return project;
    });

    const updateUser = await user.save();

    return Response.json({
      data: { projects: updateUser.projects },
      msg: "Task added",
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

  const { projectTitle, taskTitle } = await req.json();
  //console.log({ projectTitle, taskTitle });

  try {
    dbConnect();
    const user = await User.findOne({ username }, "projects");
    if (!user)
      return new Response(JSON.stringify({ error: "Cannot find user" }), {
        status: 500,
      });

    user.projects.map((project) => {
      if (project.title === projectTitle) {
        const updatedTasks = project.tasks.filter(
          (task) => task.title !== taskTitle
        );
        project.tasks = updatedTasks;
      }
      return project;
    });

    const updateUser = await user.save();

    return Response.json({
      data: { projects: updateUser.projects },
      msg: "Task deleted",
    });
  } catch (error) {
    console.log("Error: ", error);
    return new Response(JSON.stringify({ error: "Server Error" }), {
      status: 500,
    });
  }
}

export async function PATCH(req: NextRequest) {
  const username = req.headers.get("username");
  if (!username)
    return new Response(JSON.stringify({ error: "Invalid header" }), {
      status: 401,
    });

  const { projectTitle, taskTitle, taskIsCompleted, taskProprity } =
    await req.json();
  //console.log({ projectTitle, taskTitle, taskIsCompleted, taskProprity });

  try {
    dbConnect();
    const user = await User.findOne({ username }, "projects");
    if (!user)
      return new Response(JSON.stringify({ error: "Cannot find user" }), {
        status: 500,
      });

    user.projects.map((project) => {
      if (project.title === projectTitle) {
        project.tasks.map((task) => {
          if (task.title === taskTitle) {
            if (taskIsCompleted !== undefined) {
              task.isCompleted = taskIsCompleted;
            } else {
              task.priority = taskProprity;
            }
          }
        });
      }
      return project;
    });

    const updateUser = await user.save();

    return Response.json({
      data: { projects: updateUser.projects },
      msg: "Task updated",
    });
  } catch (error) {
    console.log("Error: ", error);
    return new Response(JSON.stringify({ error: "Server Error" }), {
      status: 500,
    });
  }
}
