'use client'

import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { TBlogs } from "@/type";

const Page = () => {

  const { data: blogs } = useGetBlogsQuery(undefined);

  return (
    <div className="my-10 w-[90%] mx-auto">
      <div>
        <h1 className="text-center text-4xl my-5">
          About Blogs from <span className="text-cyan-500">blogiz</span>
        </h1>
        <p className="text-xl w-2/6 mx-auto mt-3 text-center leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          voluptatibus cum dolorem reprehenderit molestias alias natus itaque
        </p>
      </div>
      {/* mini latest blogs */}
      <div className="grid grid-cols-3 gap-5 my-10 ">
        {blogs?.map((blog:TBlogs) => (
          <BlogCard key={blog?.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Page;
