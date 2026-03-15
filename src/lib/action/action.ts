"use server"
export const createUser = async(formData:FormData) =>{
    const name = formData.get("name");
    const email = formData.get("email");
    console.log("Name : ",name,"Email :",email)
}