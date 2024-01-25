import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
function ItemsProductApp() {
    const { slug,item } = useParams();
    const [fieldss, setFieldss] = useState([])
    const fetchfieldData = async () => {
      try {
        const response = await fetch(`http://38.242.233.112:499/api/main/fields/mainapp/${slug}/`);
        const data = await response.json();
        console.log(data,'-----------------------------------------------------------------')
        console.log(data,'fieldler')
        setFieldss(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const [data, setData] = useState([])

    const fetchData = async () => {
      try {
        const response = await fetch(`http://38.242.233.112:499/api/main/mainapp/${slug}/${item}/`);
        const data = await response.json();
        const parsedItems = JSON.parse(data);
        setData(parsedItems[0])
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    useEffect(() => {
      fetchData()
      fetchfieldData()
    }, [])
    console.log(data,'-3333333333333333333333333333333333333333333333333333333333333333333')
    const token = window.localStorage.getItem('access')
    const [inputValues, setInputValues] = useState({
        title: '',
        name:  '',
        description: '',
        content:  '',
        
      });
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
      };


  const Edit = async () => {
    try {
      const nonEmptyValues = Object.fromEntries(
        Object.entries(inputValues).filter(([key, value]) => value !== '')
      );
      const response = await fetch(`http://38.242.233.112:499/api/main/edit/mainapp/${slug}/${item}/`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          nonEmptyValues
        )
      });

      if (response.ok) {
        const newData = await response.json();
        console.log('istek gonderildi:', newData);
    fetchData()
      } 
    } catch (error) {
      console.error('Bir hata oluştu:', error);
    }
  };
  const Delete = async () => {
    try {
     
      const response = await fetch(`http://38.242.233.112:499/api/main/delete/mainapp/${slug}/${item}/`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
         {}
        )
      });

      if (response.ok) {
        const newData = await response.json();
        window.location = `/mainapp/${slug}/`
        console.log('istek gonderildi:', newData);
    fetchData()
      } 
    } catch (error) {
      console.error('Bir hata oluştu:', error);
    }
  };



    if(fieldss){
  return (
    <div>
      <div className='flex flex-col mt-20 mx-20 leading-10'>
      <h1 className='text-4xl'>{slug}</h1>
    
      <div className='mt-4'>
      {fieldss && fieldss.map((field) => (
       field.name !== 'image' && field.name !== 'mainimage' && field.name !== 'backimage' && field.name !== 'color' && field.name !== 'hoverimage' 
       && field.name !== 'size' && field.name !== 'brand' ? 
      (
        <div key={field.name} className="mb-4">
          <label htmlFor={field.name} className="block text-gray-600 font-semibold mb-2">
            {field.name}
          </label>
          {field.type=='foreign' ? <><select name='color' id='color'>
            {field.name=='color' && filterData.colors ?
            filterData.colors.map((color)=>(   <option value={color.id}>{color.name}</option>))
         
            :<></>}
            
            </select></>:   
          <input 
          
            onChange={handleInputChange}
            type={field.type}
            id={field.name}
            name={field.name}
            placeholder={data.fields && data.fields[field.name] ? data.fields[field.name] : ""}
            className="w-52 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />}
       
        </div>):<></>
      ))}
      <button onClick={Edit} className='bg-gray-500  px-10 mt-10 mx-10  text-white'>Deyisiklik et</button>
      <button onClick={Delete} className='bg-gray-500  px-10 mt-10   text-white'>SIL</button>

      </div>
    </div>
    </div>
  )}
}

export default ItemsProductApp
