import React, { useState } from 'react';
import {useHistory, useLocation } from 'react-router-dom';

import "../css/create.css";

const initialState = {
    title: "",
    Summary: "",
    author_name: "",
}

const Create = () => {
    const [state, setState] = useState(initialState);

    const { title, Summary, author_name } = state;

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleInputChange = (e) => {
        let { title, value} = e.target;
        setState({ ...state, [title]: value});
    }
  return (
    <>
      <h1>Create Blog</h1>
      <div style={{marginTop: "60px"}}>
        <form style={{margin:"auto", padding:"15px", maxWidth:"400px", alignContent:"center"}} onSubmit={handleSubmit}>
            <label htmlFor='title'>Title</label>
            <input type="text" id='title' name='title' placeholder='Enter blog Title...' onChange={handleInputChange} value={title} />

            <label htmlFor='summary'>Summary</label>
            <input type="text" id='summary' name='summary' placeholder='Enter blog summary...' onChange={handleInputChange} value={Summary} />

            <label htmlFor='author_name'>Author Name</label>
            <input type="text" id='author_name' name='author_name' placeholder='Enter blog author_name...' onChange={handleInputChange} value={author_name} />

            <input type="submit" value="Create" />
        </form>
      </div>
    </>
  )
}

export default Create
