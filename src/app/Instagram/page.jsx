'use client'
import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import Image from 'next/image'
function Instagram() {
  const [result, setResult] = useState(null);
  const [url, setUrl] = useState("");
  const options = {
    method: 'GET',
    url: 'https://instagram-post-and-reels-downloader.p.rapidapi.com/main/',
    params: {
      url: `${url}`
    },
    headers: {
      'X-RapidAPI-Key': 'b6a833b38dmsh59568ba84b92151p16851bjsnb0044221bc34',
      'X-RapidAPI-Host': 'instagram-post-and-reels-downloader.p.rapidapi.com'
    }
  };
  
  const getData = async () => {
    try{
      const response = await axios.request(options);
      console.log(response);
      setResult(response.data)
    } catch (error) {
      console.error(error);
    }
  }
  const urlsResult = (result) => {
    result.map((item, index) => {
      return (
        <div key={index} className='flex flex-col justify-center '>
          <div>{item.title}</div>
          <img 
            src={item.thumb} 
            width={200}
            height={200}
          />
          <a className='bg-blue-500 text-white px-4 py-2 my-2 w-fit rounded-lg hover:bg-blue-600 focus:outline-none focus:border-blue-300' 
            href={item.link} download target='__blank'>Download</a>
        </div>
      )
    })
  }
  return (
    <div className='flex justify-center items-center h-screen flex-wrap'> 
        <div className="flex flex-wrap justify-center">
          <input className='w-full rounded-md py-1.5 pl-7 pr-20 text-gray-900 ring-1 border-solid border-black border-2  my-3' type="text" 
            onChange={(e)=>setUrl(e.target.value)} />
          
          <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-300' 
            onClick={url && getData}>Download</button>
        </div>
      {
        result && result.length ? 
        result.map((item, index) => {
          return (
            <div key={index} className='flex flex-col justify-center '>
              <div>{item.title}</div>
              <img 
                src={item.thumb} 
                width={200}
                height={200}
              />
              <a className='bg-blue-500 text-white px-4 py-2 my-2 w-fit rounded-lg hover:bg-blue-600 focus:outline-none focus:border-blue-300' 
                href={item.link} download target='__blank'>Download</a>
            </div>
          )
        })
        : 
        <></> 
      }
      {
        result && result.length == 0 ? <>Invalid Url</> : <></>
      }
    </div>
  )
}

export default Instagram