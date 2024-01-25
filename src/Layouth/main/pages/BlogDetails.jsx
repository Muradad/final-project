import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
function BlogDetails() {
    const [blog, setBlog] = useState({});
    const { id } = useParams();
    const fetchData = async () => {
        try {
          const response = await fetch(`http://38.242.233.112:499/api/blog/${id}`);
          const data = await response.json();
          console.log(data, '213293103');
          setBlog(data,'lsadklasjdlkasjdlkjasd');
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, [id]);
  return (
  
        
      <div className='mt-32'>
      <div className="about flex justify-evenly">
        <div className="aboutImg mx-11 w-[40%] mb-5">
          <img className=' AboutIMG max-w-[100%]' src={blog.image} alt="" />
        </div>
        <div className="aboutContent max-w-xl mt-20 ">
        <h1>{blog.title}</h1>
          <p className='mb-10'>{blog.content}</p>
            <p>{blog.created_at}</p>
        </div>
      </div>
    </div>
  )
}

export default BlogDetails
