import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "../css/create.css";
import axios from "axios";

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

  const {id} = useParams();

  useEffect(() => {
    if (id) {
      getUpdatedBlog(id);
    }
  }, [id]);

  const getUpdatedBlog = async(id) => {
    const response = await axios.get(`http://localhost:8080/api/blogs/${id}`);
    if(response.status === 200) {
      setState({ ...response.data[0]});
    }
  }

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
      <h3 className="mt-4" style={{color:'#E11D48'}}>Create Blog</h3>
      <div>
        <form
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
          }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="title"><strong>Title</strong></label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter blog Title..."
            onChange={handleInputChange}
            value={title}
          />

          <label htmlFor="summary"><strong>Summary</strong></label>
          <textarea
            type="text"
            id="summary"
            name="Summary"
            rows={4}
            cols={43}
            placeholder="Enter blog summary..."
            onChange={handleInputChange}
            value={Summary}
          />

          <label htmlFor="author_name"><strong>Author Name</strong></label>
          <input
            type="text"
            id="author_name"
            name="author_name"
            placeholder="Enter blog author_name..."
            onChange={handleInputChange}
            value={author_name}
          />
          <br/><br />
          <input type="submit" value="Create" />
        </form>
      </div>
    </>
  );
};

export default Create;
