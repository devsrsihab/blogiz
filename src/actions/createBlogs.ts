'use server'
import { TBlogs } from "@/type";


export const createBlog = async(data: TBlogs ) => {
    const res = await fetch("http://localhost:5000/blogs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-cache",
    });
    const resData = await res.json();
    return resData;
}