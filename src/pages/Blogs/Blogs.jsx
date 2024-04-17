import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";

const Blogs = () => {

  const allBlogData = useLoaderData();
  //console.log(allBlogData);


  return (
    <div className="text-center mt-6">
      <h1 className="text-3xl font-bold">
        News & updates from the local <br />
         real estate market
      </h1>
      <Helmet>
        <title>TheEstateMarket || Home</title>
      </Helmet>
      <div className="my-12">
      
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {allBlogData.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
      </div>
    </div>
  );
};

export default Blogs;
