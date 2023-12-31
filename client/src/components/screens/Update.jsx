import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../css/create.css";
import axios from "axios";



const Update = () => {
  
  let { id } = useParams();
  const [values, setValues] = useState({
    id: id,
    title: '',
    Summary:'',
    author_name: ''
  })

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/blogs/${id}`)
    // .then(res => console.log(res))
    .then(res => {
      setValues({ ...values, title: res.data.title, Summary: res.data.Summary, author_name: res.data.author_name})
    })
    .catch(err => console.log(err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.patch(`http://localhost:8080/api/update-blogs/${id}`, values)
    .then(res => {
      navigate("/");
    })
    .catch(err => console.log(err))
  }
  

  return (
    <>
      <h3 className="mt-4" style={{color:'#E11D48'}}>Update Blog</h3>
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
            value={values.title}
            onChange={e => setValues({...values, title: e.target.value})}
          />

          <label htmlFor="summary"><strong>Summary</strong></label>
          <textarea
            type="text"
            id="summary"
            name="Summary"
            rows={4}
            cols={43}
            placeholder="Enter blog summary..."
            value={values.Summary}
            onChange={e => setValues({...values, Summary: e.target.value})}
          />

          <label htmlFor="author_name"><strong>Author Name</strong></label>
          <input
            type="text"
            id="author_name"
            name="author_name"
            placeholder="Enter blog author_name..."
            value={values.author_name}
            onChange={e => setValues({...values, author_name: e.target.value})}
          />
          <br/><br />
          <input type="submit" value="Update" />
          <Link to='/'>
          <button type="button" className="btn btn-outline-secondary btn-lg btn-block" style={{width: '100%'}}>Cancel</button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Update;
