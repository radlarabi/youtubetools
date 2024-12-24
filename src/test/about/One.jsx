// 'use client'
// import { useState } from "react";
// import copy from "copy-to-clipboard";

// const Index = () => {
//   const [videoURL, setVideoURL] = useState("");
//   const [thumbnailOptions, setThumbnailOptions] = useState([]);

//   const getYouTubeThumbnail = (url) => {
//     let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
//     let match = url.match(regExp);

//     if (match && match[1].length === 11) {
//       const videoURL = match[1];
//       const thumbnailBaseUrl = "http://img.youtube.com/vi/";

//       const options = [
//         { resolution: "HD (1280x720)", code: "maxresdefault" },
//         { resolution: "SD (640x480)", code: "sddefault" },
//         { resolution: "Normal (480x360)", code: "hqdefault" },
//         { resolution: "Medium (320x180)", code: "mqdefault" },
//         { resolution: "Low (120x90)", code: "default" },
//       ];

//       const thumbnailOptions = options.map((option) => ({
//         resolution: option.resolution,
//         url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
//       }));

//       setThumbnailOptions(thumbnailOptions);
//       setVideoURL("");
//     } else {
//       setThumbnailOptions([]);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <header className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-2">
//           Youtube Thumbnail Downloader
//         </h1>
//         <p className="text-gray-600">
//           Download high-quality thumbnails from YouTube videos.
//         </p>
//       </header>
//       <div className="text-center">
//         <input
//           type="text"
//           className="w-full md:w-1/2 px-4 py-2 border rounded"
//           placeholder="Enter YouTube URL"
//           value={videoURL}
//           onChange={(e) => setVideoURL(e.target.value)}
//         />
//         <button
//           className="btn-blue mt-2"
//           onClick={() => getYouTubeThumbnail(videoURL)}
//         >
//           Download Thumbnails
//         </button>
//       </div>
//       {thumbnailOptions.length > 0 && (
//         <div className="mt-8">
//           <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
//           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//             {thumbnailOptions.map((option, index) => (
//               <div key={index} className="thumbnail-option">
//                 <img src={option.url} alt={`Thumbnail ${index + 1}`} />
//                 <button
//                   className="btn-blue mt-2"
//                   onClick={() => copy(option.url)}
//                 >
//                   Copy Image URL
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Index;

// // import { useState } from 'react';
// // import axios from 'axios';

// // const ThumbnailDownloader = () => {
// //   const [youtubeUrl, setYoutubeUrl] = useState('');
// //   const [thumbnailUrl, setThumbnailUrl] = useState('');

// //   const handleDownload = async () => {
// //     // Extract video ID from YouTube URL (you'll need to implement this)
// //     const videoId = extractVideoId(youtubeUrl);

// //     // Make API request to YouTube Data API
// //     const apiKey = 'YOUR_YOUTUBE_API_KEY';
// //     const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`;
    
// //     try {
// //       const response = await axios.get(apiUrl);
// //       const thumbnailUrl = response.data.items[0].snippet.thumbnails.medium.url;
// //       setThumbnailUrl(thumbnailUrl);
// //     } catch (error) {
// //       console.error('Error fetching data from API:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <input
// //         type="text"
// //         value={youtubeUrl}
// //         onChange={(e) => setYoutubeUrl(e.target.value)}
// //         placeholder="Enter YouTube URL"
// //       />
// //       <button onClick={handleDownload}>Download Thumbnail</button>
// //       {thumbnailUrl && (
// //         <div>
// //           <img src={thumbnailUrl} alt="Thumbnail" />
// //           <a href={thumbnailUrl} download>Download Thumbnail</a>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ThumbnailDownloader;
