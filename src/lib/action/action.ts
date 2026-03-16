"use server";

import { dbConnect } from "../Database";
import UserModel from "../models/user";

export const createUser = async (formData: FormData) => {
  await dbConnect();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  try {
    const newUser = new UserModel({ name, email });
    await newUser.save();
    
    return {
      success: true,
      message: "user create successfull",
      user: JSON.parse(JSON.stringify(newUser)),
    };
  } catch (error) {
    return { success: false, message: "failed to create user", error };
  }
};
