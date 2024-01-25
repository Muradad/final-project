import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ItemsAdd() {
  const { slug } = useParams();
  
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://38.242.233.112:499/api/main/mainapp/${slug}/`);
      const data = await response.json();
      const parsedItems = JSON.parse(data);
      setItems(parsedItems);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const keysArray = Object.keys(items[0]?.fields || []);

  return (
    <div>
      <div className='mt-10 mx-10'>
        <h3>{slug} dəyişmək üçün seç</h3>
      </div>
      <div className='uppercase mx-10 mt-10 bg-gray-600 text-white p-2 w-52 rounded-lg'> 
        <Link to={`/mainapp/${slug}/add`} className='text-white'> {/* 'add' sayfasına gidecek bir Link ekledim */}
          {slug} əlavə et
        </Link>
      </div>
      <div className='mx-10 mt-10'>
        <div className='flex gap-10 items-center'>
          <span>Əməliyyat:</span>
          <select className='border border-black'>
            <option value="">---------</option>
            <option value="">seçilmiş basket item-s lari sil</option>
          </select>
          <button className='border bg-gray-400 px-5'>Getdik</button>
          <strong className='ml-2'>0/3 seçilib</strong>
        </div>
      </div>
      <div className='flex flex-col mt-4 mx-10'>
        {items.map((item) => (
          <Link
            to={`/mainapp/${slug}/${item.pk}`}
            key={item.fields.title ? item.fields.title : item.fields.name}
            className='border p-3 my-2 rounded-md hover:bg-gray-200'
          >
            <p>Item - {item.fields.title || item.fields.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ItemsAdd;
