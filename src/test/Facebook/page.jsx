// 'use client'
// import React from 'react'
// import {useState} from 'react'
// import axios from 'axios';


// function Facebook() {
//   const [FacebookData, setFacebookData] = useState(null)
//   const [FacebookUrl, setFacebookUrl] = useState("")
//   const [loading , setLoading] = useState(false)


//   const options = {
//     method: 'GET',
//     url: 'https://facebook-video-and-reel-downloader.p.rapidapi.com/',
//     params: {
//       url: `${FacebookUrl}`
//     },
//     headers: {
//       'x-rapidapi-key': 'b6a833b38dmsh59568ba84b92151p16851bjsnb0044221bc34',
//       'x-rapidapi-host': 'facebook-video-and-reel-downloader.p.rapidapi.com'
//     }
//   };
//   const getData = async () => {
//     if(FacebookUrl === "" )
//       return
    
//     try {
//       setLoading(true)
      
//       const response = await axios.request(options);
//       setFacebookData(response.data);

//       setLoading(false)
    
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <div className='flex flex-column justify-center items-center h-screen flex-wrap'> 
//         <div className="flex flex-wrap justify-center">
//           <input className='w-full rounded-md py-1.5 pl-7 pr-20 text-gray-900 ring-1 border-solid border-black border-2  my-3' type="text" 
//             onChange={(e) => {setFacebookUrl(e.target.value); setFacebookData(null)}} />
//           {
//             loading ? 
//               <button disabled="" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
//                   <svg aria-hidden="true" role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
//                   <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
//                   </svg>
//                   Loading...
//               </button> 
//             : 
//               <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center' 
//                 onClick={getData}>Download
              
//               </button>
//             }
//           </div>
//         <div> 
//           {
//             FacebookData && FacebookData.status === "success" ? 
//               <div className="className=flex flex-column justify-center">
//                 <div className="" >{FacebookData.title}</div>
//                 <img src={FacebookData.thumbnail_url} width={640} height={380}/>
//                 <a href={FacebookData.hd} target='_blank' className='bg-blue-500 text-white px-4 py-2 my-2 w-fit rounded-lg hover:bg-blue-600 focus:outline-none focus:border-blue-300'>Download Now</a>
//               </div>
//             : FacebookData && FacebookData.status === "failed" ? <div>downloading failed because of {FacebookData.message}</div> : <div></div>
//           }
//         </div>
//     </div>
//   )
// }

// export default Facebook