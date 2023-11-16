import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import NetworkModal from '@/components/NetworkModal';
import VideoSection from '@/components/VideoSection';
import React, { useState } from 'react';

export default function Home() {
	const [showModal, setShowModal] = React.useState<boolean>(false);

	return (
		<div id='home' className="max-w-[1000px] m-auto">
			<Navigation />
			<div className='hero h-full min-h-[70vh] flex flex-col justify-center relative'>
				<Image
					src='/pics/paint-heart.jpg'
					fill={true}
					alt=''
				/>
				<div
					className='title mx-auto lg:text-6xl md:text-5xl text-4xl max-w-lg lg:max-w-full text-center text-white p-8 z-10 bg-slate-800/50 rounded-lg'
					// style={{ boxShadow: '0 0 10px 26px rgb(56 189 248 / .5)' }}
				>
					Find Community with Heart Connected
				</div>
				<div className='flex justify-center w-full'>
					<div className='subtitle mx-auto mt-4 lg:text-4xl md:text-2xl max-w-xl lg:max-w-full text-xl text-white z-10 absolute bottom-3 md:bottom-10 text-center w-full'>
						Helping to bring hope and connection to those affected by congenital
						heart disease.
					</div>
				</div>
			</div>

			<div className='missionSection flex justify-center flex-col'>
				<div className='mission'>
					<div className='heading h2 w-100 m-auto text-6xl mt-10 mb-8 text-center'>
						Our Mission
					</div>
					<div className='body w-3/4 m-auto mb-8 text-lg'>
						The goal of Heart Connected is to provide community, education and
						support for those with Congenital Heart Diseases and their loved
						ones. Founded by medical professionals who are passionate about
						cardiac care, Connected Hearts seeks to help make living with a
						congenital heart disease diagnosis just a little easier.
					</div>
				</div>
			</div>

			<div className='body flex justify-center flex-col'>
				<div className='h2 w-100 m-auto text-6xl mt-20 mb-8 text-center'>
					A community with heart
				</div>
				<VideoSection />

				<div className='cta w-full text-center my-12'>
					{showModal && (
						<NetworkModal
							setShowModal={setShowModal}
						/>
					)}
					<div className='h2 w-3/4 m-auto text-5xl mt-12 mb-8'>
						Connect with a family like yours
					</div>
					<div className='h6 w-3/4 m-auto mb-8 text-lg'>
						Join our community of families facing similar experiences. Share
						support, insights, and find a community of people who understand
						what you&apos;re going through. By providing your email and city,
						you&apos;ll gain access to a list of like-minded individuals who are
						here to lend an empathetic ear and offer valuable guidance on your
						journey.
					</div>
					<button
						className='text-white font-bold px-8 py-3 rounded-full m-auto w-fit bg-cyan shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-4'
						type='button'
						onClick={() => setShowModal(true)}
					>
						Join Now
					</button>
				</div>
			</div>
		</div>
	);
}
