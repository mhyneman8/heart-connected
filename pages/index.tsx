import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import YouTubePlayer from '@/components/YouTubePlayer';
import Link from 'next/link';

export default function Home() {
  return (
    <div id="home">
      <Navigation />
      <div className="hero h-screen flex flex-col justify-center relative">
        <Image src="https://www.ucl.ac.uk/news/sites/news/files/heart_stock_cropped_0.jpg" fill={true} alt="" />
        <div className="title mx-auto text-7xl text-center text-white px-3 z-10 bg-sky-400/50 rounded" style={{ boxShadow: '0 0 10px 26px rgb(56 189 248 / .5)' }}>Welcome to Heart Connected</div>
        <div className="subtitle mx-auto mt-4 text-4xl text-white z-10 absolute bottom-20 text-center w-full">Linking Hearts, Building Hope</div>
        <div className="arrow text-7xl mx-auto mt-32 animate-bounce">&#812;</div>
      </div>

      <div className="body flex justify-center flex-col">
        <div className="h2 w-100 m-auto text-6xl mt-20 mb-8">You are not alone</div>
        <div className="video-wrapper flex flex-col justify-center lg:flex-row mb-8">
          <div className="video m-auto my-5 w-1/2">
            <YouTubePlayer videoId="Mv4VemH-bz0" />
            <div className="caption text-center mt-1">Living with Congenital Heart Disease</div>
          </div>
          <div className="video m-auto my-5 w-1/2">
            <YouTubePlayer videoId="-cEfxl_2xLw" />
            <div className="caption text-center mt-1">Day in the Life with CHD</div>

          </div>
          <div className="video m-auto my-5 w-1/2">
            <YouTubePlayer videoId="I9Rmys6HnEE" />
            <div className="caption text-center mt-1">Welcome to the World of CHD</div>
          </div>
        </div>

        <div className="cta w-full text-center my-20">
          <Link href="/network" className="rounded-full text-white bg-cyan px-10 py-5 hover:opacity-70">
            Join Our Community
          </Link>
        </div>
      </div>
    </div>
  )
}
