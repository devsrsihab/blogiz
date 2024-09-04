import { Blogs } from "@/type";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({blogs}: {blogs: Blogs[]}) => {
  return (
    <div className="my-10 w-[90%] mx-auto">
      <div>
        <h1 className="text-center text-4xl my-5">
          Latest Blogs from <span className="text-cyan-500">blogiz</span>
        </h1>
        <p className="text-xl w-2/6 mx-auto mt-3 text-center leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          voluptatibus cum dolorem reprehenderit molestias alias natus itaque
        </p>
      </div>
      {/* latest blogs */}
      <div className="grid grid-cols-2 gap-5 my-10 ">
        {blogs?.slice(0, 2)?.map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      {/* mini latest blogs */}
      <div className="grid grid-cols-3 gap-5 my-10 ">
        {blogs?.slice(2, 5)?.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
