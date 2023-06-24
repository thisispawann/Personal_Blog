import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "../css/create.css";

const initialState = {
  title: "",
  Summary: "",
  author_name: "",
};

const Create = () => {
  const [state, setState] = useState(initialState);
  const [postData, setPostData] = useState();

  const { title, Summary, author_name } = state;

  const navigate = useNavigate();

  

  // const addPostBlog = async (data) => {
  //   const response = await axios.post("http://localhost:8080/api/postBlogs");
  //   if (response.status === 200) {
  //     toast.success(response.data);
  //   }
  // };

  // const postedBlogs = (data) => {
  //   postBlogData().then(res => {
  //     if(res.status === 200){
  //       toast.success(res.data)
  //     }
  //   })
  // }

  const postBlogData = (data) => {
    
    const URL = 'http://localhost:8080/api/postBlogs'
    const request = fetch(URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
    return request;
}

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: state.title,
      Summary: state.Summary,
      author_name: state.author_name,
    }
    if (!title || !Summary || !author_name) {
      toast.error("Please provide all the values and try again!");
    } else {
      postBlogData(data).then(res => {
        console.log(res);
      }); // addPostBlog holds all the blog details
      navigate("/");
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <>
      <h1>Create Blog</h1>
      <div style={{ marginTop: "60px" }}>
        <form
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
          }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter blog Title..."
            onChange={handleInputChange}
            value={title}
          />

          <label htmlFor="summary">Summary</label>
          <input
            type="text"
            id="summary"
            name="Summary"
            placeholder="Enter blog summary..."
            onChange={handleInputChange}
            value={Summary}
          />

          <label htmlFor="author_name">Author Name</label>
          <input
            type="text"
            id="author_name"
            name="author_name"
            placeholder="Enter blog author_name..."
            onChange={handleInputChange}
            value={author_name}
          />

          <input type="submit" value="Create" />
        </form>
      </div>
    </>
  );
};

export default Create;
