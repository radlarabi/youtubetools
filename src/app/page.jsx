'use client'

import { useState } from "react";
import LoadingSkeleton from '@/component/LoadingSkeleton'
import { ToastContainer, toast } from 'react-toastify';
// import Image from 'next/image';
// import FacebookIcon from '../assets/svg/facebook.svg'
// import InstagramIcon from '../assets/svg/instagram.svg'
// import YoutubeIcon from '../assets/svg/youtube.svg'

// const url = 'https://linkedin-api8.p.rapidapi.com/search-jobs?keywords=react&locationId=92000000&datePosted=anyTime&sort=mostRelevant';


export default function Home() {
	
	// const [error, setError] = useState(null)
	const [topic, setTopic] = useState(null)
	const [result, setResult] = useState('')
	const [visited, setVisited] = useState({})
	const [loading, setLoading] = useState(false)
	const [datePosted, setDatePosted] = useState('anyTime')
	const [sortPosted, setSortPosted] = useState('mostRelevant')

	console.log(process.env.X_RAPIDAPI_KEY, process.env.X_RAPIDAPI_HOST)

	const options = {
		method: 'GET',
		headers: {
			// 'x-rapidapi-key': process.env.X_RAPIDAPI_KEY,
			// 'x-rapidapi-host': process.env.X_RAPIDAPI_HOST,
			'x-rapidapi-key': 'b6a833b38dmsh59568ba84b92151p16851bjsnb0044221bc34',
			'x-rapidapi-host': 'linkedin-api8.p.rapidapi.com'
		}
	};
  const url = 'https://linkedin-api8.p.rapidapi.com/search-jobs?keywords=' + topic + '&locationId=102787409&datePosted='+ datePosted +'&sort=' + sortPosted;
  
  async function getData(){
	  console.log('click')
	if (!topic){
		toast("Search input is required.")
		return
	}
	setLoading(true)

    try {
		const response = await fetch(url, options);
		const result = await response.json();
		setResult(result)
		if (!result.data)
			toast("No result found :(")
		console.log(result);
		setLoading(false)
	} catch (error) {
		console.error(error);
		setLoading(false)
    }
  }



  return (
	<div className="h-100 w-100">

		<div className="mx-auto w-[25rem] m-[4rem]">
			<label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
			<div className="relative">
				<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
					<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
					</svg>
				</div>
				
				<input onChange={(e) => setTopic(e.target.value)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Jobs on Linkedin" required />
			</div>
			
			<label htmlFor="countries" className="my-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Posted time</label>
			<select onChange={(e) => setDatePosted(e.target.value)} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
				<option value="anyTime" defaultValue>any Time</option>
				<option value="past24Hours">past 24 Hours</option>
				<option value="pastWeek">past Week</option>
				<option value="pastMonth">past Month</option>
			</select>

			<label htmlFor="countries" className="my-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sort Posts</label>
			<select onChange={(e) => setSortPosted(e.target.value)} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
				<option value="mostRelevant" defaultValue>most Relevant</option>
				<option value="mostRecent" >most Recent</option>
			</select>

			<button onClick={() => getData()} type="submit" className={` ${!topic ? 'bg-gray-600' : 'bg-blue-500'} my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>Search</button>
		</div>
		{
			loading ? <LoadingSkeleton/> : 
			<div className="flex flex-col justify-center items-center result-container">
				{
					result && result?.data?.map(el => (
					<div key={el.id} className="text-white my-2">
						<a href={el.url} className="url" target={`__blank${el.id}`}>
						<div className={`${visited[el.id] ? 'text-blue-300' : ''} `} onClick={() => setVisited(prev => ({...prev, [el.id]: true}))}>{el.title}</div>
						</a>
					</div>
					))
				}
			</div>
		}
		<ToastContainer />
	</div>
  )
}

  {/* <div className={styles.description}>
  <a href="/about">go to about</a>
  <a href="/contact">go to contact</a>

    <p>
      Get started by editing&nbsp;
      <code className={styles.code}>src/app/page.js</code>
    </p>
    <div>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        By{' '}
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className={styles.vercelLogo}
          width={100}
          height={24}
          priority
        />
      </a>
    </div>
  </div>

  <div className={styles.center}>
    <Image
      className={styles.logo}
      src="/next.svg"
      alt="Next.js Logo"
      width={180}
      height={37}
      priority
    />
  </div>

  <div className={styles.grid}>
    <a
      href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>
        Docs <span>-&gt;</span>
      </h2>
      <p>Find in-depth information about Next.js features and API.</p>
    </a>

    <a
      href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>
        Learn <span>-&gt;</span>
      </h2>
      <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
    </a>

    <a
      href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>
        Templates <span>-&gt;</span>
      </h2>
      <p>Explore the Next.js 13 playground.</p>
    </a>

    <a
      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>
        Deploy <span>-&gt;</span>
      </h2>
      <p>
        Instantly deploy your Next.js site to a shareable URL with Vercel.
      </p>
    </a>
  </div> */}