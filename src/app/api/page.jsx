'use client'
import { useState } from 'react'
import React from 'react'
import axios from 'axios'
function getYoutubeVideoId(url) {
  try {
    const youtubeUrl = new URL(url);
    const searchParams = new URLSearchParams(youtubeUrl.search);
    return searchParams.get("v") || null;
  } catch (error) {
    console.error("Invalid YouTube URL" + error);
    return null;
  }
}
function Page() {
  const [result, setResult] = useState(null)
  const [link, setLink] = useState(null)
  const thumbnailLink = `https://img.youtube.com/vi/${getYoutubeVideoId(link)}/maxresdefault.jpg`
  const options = {
    method: 'GET',
    url: 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl',
    params: {id: `${getYoutubeVideoId(link)}`},
    headers: {
      'X-RapidAPI-Key': 'b6a833b38dmsh59568ba84b92151p16851bjsnb0044221bc34',
      'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
    }
  };
  const getData = async () => {
    try{
      const response = await axios.request(options);
      // console.log(response)
      setResult(response.data)
    }
    catch(e){
      console.err(e)
    }
  }
  return (
    <div className='flex justify-center items-center h-screen flex-wrap'> 
        <div className="flex flex-wrap justify-center">
          <input className='w-full rounded-md py-1.5 pl-7 pr-20 text-gray-900 ring-1 border-solid border-black border-2  my-3' type="text" onChange={(e) => {setLink(e.target.value); setResult(null)}} />
          
          <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300' onClick={getData}>Download</button>
        </div>
        {
          result && result.formats ? 
          <div className='flex flex-wrap justify-center'>
            <div className=''>
              <p className='my-5'>{result.title}</p>
              <img className='' src={thumbnailLink} alt="" srcset="" width={640} height={380}/>
            </div>
            <div className='flex my-5'>
              <a className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mx-5' href={result.formats[1].url } download target='__blank'>Download Video</a>
              <a className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300' href={thumbnailLink } download target='__blank'>Download thumbnail</a>
            </div>
          </div>
          :
          <div></div>
        }
    </div>
  )
}

export default Page