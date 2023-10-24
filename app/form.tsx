"use client";

import { requestUpload, upload } from "@/utils/upload";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit } = useForm();

  const submitImage = async (data: any) => {
    console.log("hello world", data)
    try {
      let uploadKey = await requestUpload();

      const formData = new FormData();
      formData.append("Content-Type", data.image[0].type);
      formData.append("key", uploadKey);
      formData.append("uploadComplete", "true");
      formData.append("file", data.image[0]);
      
      let res = await upload(formData); 
    } catch (e) {
      console.log(e)
    }
  };
  
  return (
    <form onSubmit={handleSubmit(submitImage)}>
      <div className="flex flex-col">
        <label htmlFor="name">File</label>
        <input type="file" {...register("image")} accept=".png,.jpg,.webp" className="border border-white text-white rounded-lg" />
      </div>
      <input type="submit" value="Upload File" className="bg-blue-600 px-4 py-2 rounded-lg mt-4" />
    </form>
  )
}
