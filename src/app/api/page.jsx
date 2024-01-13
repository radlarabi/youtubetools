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
      console.log(response)
      setResult(response.data)
    }
    catch(e){
      console.err(e)
    }
  }
  return (
    <div>
        <input type="text" onChange={(e) => setLink(e.target.value)} />
        
        <button onClick={getData}>get Result</button>
        {
          result && result.formats ? 
          <div>
            <div>
              <p>{result.title}</p>
              <img src={thumbnailLink} alt="" srcset="" width={640} height={380}/>
            </div>
            <div>
              <a href={result.formats[1].url } download target='__blank'>Download Video</a>
              <a href={thumbnailLink } download target='__blank'>Download thumbnail</a>
            </div>
          </div>
          :
          <div></div>
        }
    </div>
  )
}

export default Page