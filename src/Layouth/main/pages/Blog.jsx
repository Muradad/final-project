import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch('http://38.242.233.112:499/api/blogs')
      .then(response => response.json())
      .then(data => setBlogData(data.results))
      .catch(error => console.error('Error fetching blog data:', error));
  }, []);

  return (
    <>
  <div>
    <div className='flex justify-center flex-col items-center'>
      <h1 className='text-5xl'>Featured Blog</h1>
      <p>If you’ve found our Theme to be helpful.</p>
    </div>
  </div>
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4 mt-10'>
  {blogData.map(blog => (
    <div key={blog.id} className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/blog/${blog.id}`}>
        <img className="w-full h-77 object-cover rounded-t-lg" src={blog.image} alt={blog.title} />
      </Link>
      <div className="p-6">
        <a className="text-blue-500 hover:underline">
          <h5 className="mb-2 text-xl font-bold leading-snug text-gray-900 dark:text-white">
            {blog.title}
          </h5>
        </a>
        <p className="mb-4 text-gray-700 dark:text-gray-400">
          {blog.content.length > 30
            ? blog.content.slice(0, 30) + '...'
            : blog.content}
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <span>{new Date(blog.created_at).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

    </>
  );
}

export default Blog;
