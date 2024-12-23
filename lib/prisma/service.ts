/** @format */

import prisma from "./db";
import bycrpt from "bcrypt";

export async function registerUser(data: {
  name: string;
  email: string;
  username: string;
  password: string;
}) {
  const user = await prisma.user.findFirst({
    where: {
      OR: [{ email: data.email }, { username: data.username }],
    },
  });
  if (user) {
    if (user.email === data.email && user.username === data.username) {
      return {
        status: false,
        message: "Email dan username sudah dipakai",
        statusCode: 400,
      };
    } else if (user.email === data.email) {
      return { status: false, message: "Email sudah dipakai", statusCode: 400 };
    } else if (user.username === data.username) {
      return {
        status: false,
        message: "Username sudah dipakai",
        statusCode: 400,
      };
    }
  } else {
    data.password = await bycrpt.hash(data.password, 10);
    try {
      const newUser = await prisma.user.create({
        data: {
          fullname: data.name,
          email: data.email,
          username: data.username,
          password: data.password,
          profile: {
            create: {},
          },
        },
      });
      if (newUser) {
        return {
          status: true,
          message: "User created successfully",
          statusCode: 200,
        };
      }
    } catch (error) {
      return {
        status: false,
        message: `Failed to create user`,
        statusCode: 400,
      };
    }
  }
}

export async function loginUser(data: { email: string }) {
  const user = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
    include: {
      profile: true,
    },
  });
  if (user) {
    return user;
  } else {
    return null;
  }
}
