import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { FilterResDataContext } from '../../Layouth/main/pages/Filter/shopnavbar/Context/FilterDataResContext';
function CreateItem() {
    const token = window.localStorage.getItem('access')
    const { filterData } = useContext(FilterResDataContext);
    const { model } = useParams();
    const [data, setData] = useState([])
    console.log(filterData,'-----------------------------------------------------------------')
    const [inputValues, setInputValues] = useState({});
    
      const handleInputChange = (e) => {
        const { name, value,files } = e.target;

      
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
 
    };
  
    const Create = async () => {
        try {
          const formData = new FormData();
      
          // Append each field to formData
          data.forEach((field) => {
            const { name, type } = field;
      
            if (type === 'file') {
              // Handle file type
              const fileInput = document.getElementById(name);
              if (fileInput && fileInput.files.length > 0) {
                formData.append(name, fileInput.files[0]);
              }
            } else {
              // Handle other types (text, number, etc.)
              const inputElement = document.getElementById(name);

              if (inputElement.value) {
                
                formData.append(name, inputElement.value);
              }
            }
          });
      
          const response = await fetch(`http://38.242.233.112:499/api/main/create/mainapp/${model}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
    
            },
            body: formData,
          });
      
          // Handle the response as needed
          if (response.ok) {
            console.log('Data successfully sent');
          } else {
            console.error('Failed to send data');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };


    const fetchData = async () => {
      try {
        const response = await fetch(`http://38.242.233.112:499/api/main/fields/mainapp/${model}/`);
        const data = await response.json();
        console.log(data,'-----------------------------------------------------------------')
        console.log(data,'fieldler')
        setData(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    useEffect(() => {
      fetchData()

    }, [])
    console.log(data,'1029301293019203912093')
   if (data){
  return (
    <div className=" mx-auto mt-10 p-8 bg-white  rounded-md">
    <h1 className="text-2xl font-bold mb-6">{model}</h1>
    <div>
      {data && data.map((field) => (
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
            placeholder={field.name}
            className="w-52 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />}
       
        </div>
      ))}
      <button
        onClick={Create}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Yarat
      </button>
    </div>
  </div>
 
  )}}


export default CreateItem
