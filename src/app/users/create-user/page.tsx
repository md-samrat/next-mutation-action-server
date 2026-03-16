"use client"
import { createUser } from "@/lib/action/action";
import React from "react";

function CreateUser() {
    const handleSubmit = async(formData:FormData) =>{
        const result = await createUser(formData)
        if(result.success){
          alert(result.message)
        }else{
          alert(result.message)
        }
    }
 

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-5">Create User</h1>

      <form
        action={handleSubmit}
        className="flex flex-col gap-4 border p-6 rounded w-80"
      >
        <div>
          <label className="font-semibold">Name:</label>
          <input
            type="text"
            required
            name="name"
            className="border w-full p-2 mt-1 rounded"
          />
        </div>

        <div>
          <label className="font-semibold">Email:</label>
          <input
            type="email"
            required
            name="email"
            className="border w-full p-2 mt-1 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Create User
        </button>
      </form>
    </div>
  );
}

export default CreateUser;