'use client'


import Image from 'next/image';
import FacebookIcon from '../assets/svg/facebook.svg'
import InstagramIcon from '../assets/svg/instagram.svg'
import YoutubeIcon from '../assets/svg/youtube.svg'

export default function Home() {
  return (
    <div class="flex justify-center items-center h-screen">
    <main>
        <a href='/Facebook'>
          <Image 
            class="h-55 w-50"
            height={50}
            width={50}
            src={FacebookIcon} 
            />
        </a>
        <a href='/Youtube'>
            <Image 
                class="h-55 w-50"
                height={50}
                src={YoutubeIcon}
                alt="Youtube"
                />
        </a>
        <a href='/Instagram'>
            <Image 
                class="h-50 w-50"
                height={50}
                width={50}
                src={InstagramIcon}
                alt="Instagram"
            />
        </a>
    </main>
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