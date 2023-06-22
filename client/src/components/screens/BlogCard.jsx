import React from 'react'
import "../css/blogs.css";


const BlogCard = ({data}) => {
  return (
    <div>
      <a href="{data.link}" className='blog-card-header'>
        <div className='blog-card-body'>
            <p className='blog-card-title'>{data.title}</p>
            <p>{data.Summary}</p>
        </div>
      </a>
    </div>
  )
}

export default BlogCard
