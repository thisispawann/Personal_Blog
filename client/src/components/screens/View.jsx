import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
//import { getBlogViewData } from '../../factory/api';
import axios from 'axios';


const View = () => {
  const [blog, setBlog] = useState();

  const {id} = useParams();

  useEffect(() => {
    if(id) {
      getSingleBlog(id);
    }
  }, [id]);

  console.log(id);

  const getSingleBlog = async (id) => {
    const res = await axios.get(`http://localhost:8080/api/blogs/${id}`);
    if(res.status === 200) {
      // console.log(res.data.title)
      // console.log(res.data.author_name)
      // console.log(res.data.Summary)
      // console.log(res)
      // setBlog({...res.data[0]})
      setBlog({ ...blog, title: res.data.title, Summary: res.data.Summary, author_name: res.data.author_name})
    //  console.log(res[0].title)
      // setBlog({ ...res.data[0]});
    }
  }

if (blog == null) {
    return(
        <p className="loading">Loading...</p>
    )
}

  return (
    <div>
      <div className='card w-75' style={{margin:90}}>
        <div className='card-header'>
         <strong> <p style={{color:'#E11D48'}}>Blog Details</p></strong>
        </div>
        <div className='container'>
          <strong>Title: </strong> <span>{blog && blog.title}</span> <br /><br />
          <strong>Summary: </strong> <span>{blog && blog.Summary}</span> <br /><br />
          <strong>Author Name: </strong> <span>{blog && blog.author_name}</span> <br /><br /><br />
          <Link to='/'>
              <button className='btn btn-primary'>Go Back</button>          
          </Link>
          <br/><br/>
        </div>
      </div>
    </div>
  )
}

export default View;
