// import config from "@/tailwind.config";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '@/components/styles.module.css';

export default function Navigation() {
	const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
	const desktopItemsStyle =
		'block inline-block mt-0 mr-4 no-underline hover:underline hover:text-purple text-white';
	const mobileItemStyle = 'block mt-4 no-underline text-white hover:underline';
	const handleNavOpen = () => {
		setMobileNavOpen(!mobileNavOpen);
	};
	return (
		<nav className='flex z-50 items-center fixed top-0 left-0 right-0 rounded-b-md justify-between flex-wrap bg-gradient-to-r from-cyan from-20% via-indigo via-70% to-purple to-100% p-6'>
			<a
				href='#body'
				className={styles.skipLink}
			>
				Skip Navigation
			</a>
			<div className='flex items-center flex-shrink-0 text-white mr-6'>
				<Link href='/'>
					<Image
						src='/logos/Logo.png'
						width={60}
						height={60}
						alt='Living with CHD'
						className='rounded-full absolute top-2'
					/>
				</Link>
			</div>
			<div className='block'>
				<button
					onClick={handleNavOpen}
					className='flex items-center px-3 py-2 border rounded lg:hidden text-teal-200 hover:text-white hover:border-white hover:bg-purple'
				>
					<svg
						className='fill-white h-3 w-3'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<title>Menu</title>
						<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
					</svg>
				</button>
			</div>
			{/* desktop nav */}
			<div
				id='desktop-menu-items'
				className='ml-8 flex-grow hidden lg:flex items-center w-auto text-white'
			>
				<div className='text-md lg:flex-grow ml-8'>
					<Link
						href='/about'
						className={desktopItemsStyle}
					>
						About
					</Link>
					<Link
						href='/learn'
						className={desktopItemsStyle}
					>
						Learn
					</Link>
					<Link
						href='/forum'
						className={desktopItemsStyle}
					>
						Forum
					</Link>
					<Link
						href='/resources'
						className={desktopItemsStyle}
					>
						Resources
					</Link>
					<Link
						href='/calculator'
						className={desktopItemsStyle}
					>
						Trauma Risk Factors
					</Link>
				</div>
				<div>
					<Link
						href='/network'
						className='inline-block text-sm no-underline px-4 py-2 leading-none border rounded text-white border-white hover:bg-purple  mt-4 lg:mt-0'
					>
						Join Our Community
					</Link>
				</div>
			</div>
			{/* mobile nav */}
			{mobileNavOpen && (
				<div
					id='mobile-menu-items'
					className='w-full flex flex-col text-end flex-grow text-white lg:hidden'
				>
					<div className='text-md'>
						<Link
							href='/about'
							className={mobileItemStyle}
						>
							About
						</Link>
						<Link
							href='/learn'
							className={mobileItemStyle}
						>
							Learn
						</Link>
						<Link
							href='/forum'
							className={mobileItemStyle}
						>
							Forum
						</Link>
						<Link
							href='/resources'
							className={mobileItemStyle}
						>
							Resources
						</Link>
						<Link
							href='/calculator'
							className={mobileItemStyle}
						>
							Trauma Risk Factors
						</Link>
					</div>
					<div>
						<Link
							href='/network'
							className='inline-block no-underline text-sm px-4 py-2 leading-none border rounded text-white border-white hover:bg-purple mt-8'
						>
							Join Our Community
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
}
