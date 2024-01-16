'use client'
import { useState } from 'react'
import React from 'react'
import axios from 'axios'

function getYoutubeVideoId(url) {
  try {
    const youtubeUrl = new URL(url);
    let videoId;

    if (youtubeUrl.hostname === "youtu.be") {
      
      videoId = youtubeUrl.pathname.substr(1);
    
    } else if (youtubeUrl.hostname === "www.youtube.com" && youtubeUrl.searchParams.has("v")) {
      
      videoId = youtubeUrl.searchParams.get("v");
    
    } else {
      
      throw new Error("Invalid YouTube URL");
    }

    return videoId.trim() !== "" ? videoId : null;
  } catch (error) {
    console.error("Invalid YouTube URL" + error);
    return null;
  }
}

function getAudioUrl(result){
  const len = result.adaptiveFormats.length;
  const format = result.adaptiveFormats
  let i = 0
  while(i < len){
    if (format[i].audioQuality == "AUDIO_QUALITY_MEDIUM")
      return format[i].url;
    i++;
  }
  return "youtubetools.vercel.app"
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
      console.log(response)
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
          
          <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-300' onClick={getData}>Download</button>
        </div>
        {
          result && result.formats ? 
          <div className='flex flex-col justify-center '>
            <div className='flex-raw'>
              <p className='my-5'>{result.title}</p>
              <img className='' src={thumbnailLink} alt="" srcset="" width={640} height={380}/>
            </div>
            <div className='flex flex-col my-3 justify-center'>
              <a className='bg-blue-500 text-white px-4 py-2 my-2 w-fit rounded-lg hover:bg-blue-600 focus:outline-none focus:border-blue-300' 
                href={result.formats[1].url } download target='__blank'>Download Video</a>

              <a className='bg-blue-500 text-white px-4 py-2 my-2 w-fit rounded-lg hover:bg-blue-600 focus:outline-none focus:border-blue-300' 
                href={getAudioUrl(result)} download target='__blank'>Download Audio</a>

              <a className='bg-blue-500 text-white px-4 py-2 my-2 w-fit rounded-lg hover:bg-blue-600 focus:outline-none focus:border-blue-300' 
                href={thumbnailLink } download target='__blank'>Download thumbnail</a>
            </div>
          </div>
          :
          <div></div>
        }
    </div>
  )
}

export default Page