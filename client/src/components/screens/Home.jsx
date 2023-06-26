import React, { useEffect, useState } from "react";

import { getBlogData } from "../../factory/api";

import BlogCard from "./BlogCard";
import "../css/Home.css";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  // fetching blog data
  useEffect(() => {
    setTimeout(() => {
      getBlogData()
        .then((res) => {
          // console.log(res);
          // console.log(res[0].title);
          setBlogs(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1500);
  }, []);


  if (blogs == null) {
    return <p className="loading">Loading...</p>;
  }
  
  return (
     <div className="blogs-header">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} data={blog} />
      ))}
    </div>
  );
};

export default Home;
