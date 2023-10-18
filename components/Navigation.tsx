// import config from "@/tailwind.config";
import Link from "next/link";
import { useState } from 'react';

export default function Navigation() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleNavOpen = () => {
    setMobileNavOpen(!mobileNavOpen);
  }
  return (
      <nav className="flex z-30 items-center fixed top-0 left-0 right-0 rounded-b-md justify-between flex-wrap bg-gradient-to-r from-cyan from-20% via-indigo via-70% to-purple to-100% p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
          <Link href="/">
              <span className="font-semibold text-xl tracking-tight">logo</span>
          </Link>
        </div>
        <div className="block">
          <button onClick={handleNavOpen} className="flex items-center px-3 py-2 border rounded lg:hidden text-teal-200 hover:text-white hover:border-white hover:bg-purple">
            <svg className="fill-white h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        {/* desktop nav */}
        <div id='desktop-menu-items' className="ml-8 flex-grow hidden lg:flex items-center w-auto text-white">
            <div className="text-sm lg:flex-grow">
              <Link href="/resources" className="block mt-4 inline-block mt-0 mr-4 hover:underline">
                Resources
              </Link>
              <Link href="/learn" className="block mt-4 inline-block mt-0 mr-4 hover:underline">
                Learn
              </Link>
              <Link href="/about" className="block mt-4 inline-block mt-0 mr-4 hover:underline">
                About
              </Link>
              <Link href="/network" className="block mt-4 inline-block mt-0 mr-4 hover:underline">
                Join Our Network
              </Link>
            </div>
            <div>
                <Link href="/calculator" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:bg-purple  mt-4 lg:mt-0">
                    Calculator
                </Link>
            </div>
        </div>
        {/* mobile nav */}
        {mobileNavOpen && (
          <div id='mobile-menu-items' className="w-full flex flex-col text-end flex-grow text-white lg:hidden">
            <div className="text-sm">
              <Link href="/resources" className="block mt-4 hover:underline">
                Resources
              </Link>
              <Link href="/learn" className="block mt-4 hover:underline">
                Learn
              </Link>
              <Link href="/about" className="block mt-4 hover:underline">
                About
              </Link>
              <Link href="/network" className="block mt-4 hover:underline">
                Join Our Network
              </Link>
            </div>
            <div>
              <Link href="/calculator" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:bg-purple mt-8">
                  Calculator
              </Link>
            </div>
          </div>
          )} 
      </nav>
  )
}