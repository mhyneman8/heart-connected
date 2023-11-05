import Navigation from '@/components/Navigation';
import Heading from '@/components/Heading';
import React, { useState } from 'react';
import aboutContent from '@/content/aboutContent';
import NetworkModal from '@/components/NetworkModal';

export default function About() {
	const [showModal, setShowModal] = React.useState<boolean>(false);

	return (
		<div>
			<Navigation />
			<Heading heading='About Heart Connected' />
			<div className='body flex flex-col justify-center mb-10'>
				{aboutContent.map((section, index) => (
					<div
						key={index}
						className='m-auto w-4/5 mt-8'
					>
						<div className='font-bold text-4xl mb-5'>{section.heading}</div>
						<div>{section.content}</div>
					</div>
				))}

				<div className='flex flex-col justify-center'>
					{showModal && (
						<NetworkModal
							showModal={showModal}
							setShowModal={setShowModal}
						/>
					)}
					<div className='h2 w-3/4 m-auto text-5xl mt-12 mb-8'>
						Connect with a family like yours
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
