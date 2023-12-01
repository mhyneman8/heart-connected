import Navigation from '@/components/Navigation';
import Heading from '@/components/Heading';
import React, { useState } from 'react';
import aboutContent from '@/content/aboutContent';
import NetworkModal from '@/components/NetworkModal';

export default function About() {
	const [showModal, setShowModal] = React.useState<boolean>(false);

	return (
		<div className='max-w-[1000px] m-auto'>
			<Navigation />
			<Heading
				imgSrc={'/header_imgs/mural.jpg'}
				heading='About Heart Connected'
				credit={
					'Irving Park and Francisco in the Albany Park neighborhood of Chicago. Artist: Christian Paz.'
				}
			/>
			<div
				id='body'
				className='body flex flex-col justify-center mb-10'
			>
				{aboutContent.map((section, index) => (
					<div
						key={index}
						className='m-auto md:w-9/12 sm:w-11/12  mb-8'
					>
						<div className='font-bold text-4xl mb-5'>{section.heading}</div>
						<div className='indent-6'>{section.content}</div>
					</div>
				))}

				<div className='flex flex-col justify-center'>
					{showModal && <NetworkModal setShowModal={setShowModal} />}
					<div className='h2 w-3/4 m-auto text-4xl mt-12 mb-8'>
						Connect with a family like yours today
					</div>
					<button
						className='text-white font-bold px-8 py-3 rounded-full m-auto w-fit bg-cyan shadow hover:shadow-lg outline-none focus:outline-none my-4'
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
