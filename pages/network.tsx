import Heading from '@/components/Heading';
import Navigation from '@/components/Navigation';
import NetworkModal from '@/components/NetworkModal';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Mural can be found on the corner of Irving Park and Francisco in the Albany Park neighborhood of Chicago. All credit goes to Christian Paz.

export default function Network() {
	const [showModal, setShowModal] = useState(false);

	return (
		<div className='max-w-[1000px] m-auto'>
			<Navigation />
			<Heading
				credit={''}
				imgSrc={'/pics/Strength_connection.jpg'}
				heading='Join the Heart Connected Community'
			/>
			<div
				id='body'
				className='body'
			>
				{showModal && <NetworkModal setShowModal={setShowModal} />}

				<div className='h6 w-3/4 m-auto mb-8 text-lg'>
					Heart Connected is a community built to form strong connections
					between families who are living with Congenital Heart Disease. There
					is no better support for folks who are impacted with CHD than others
					who have experienced the journey themselves or through a family
					member.
				</div>
				<div className='h6 w-3/4 m-auto mb-8 text-lg'>
					Whether you are a person living with Congenital Heart Disease or you
					love someone who does, we&apos;d love to have you as a valued member
					of our community. You&apos;ll be connected to others just like you who
					enjoy the support, education and connection our organization provides.
					Join us today!
				</div>
				<div className='flex justify-center'>
					<button
						className='text-white font-bold px-8 py-3 rounded-full m-auto w-fit bg-cyan shadow hover:shadow-lg outline-none focus:outline-none mb-10'
						type='button'
						onClick={() => setShowModal(true)}
					>
						Join Our Community
					</button>
				</div>
				<div className='h6 w-3/4 m-auto mb-8 text-lg'>
					<div className='font-bold'>Why You Should Join Us: </div>
					<div>
						A strong, interconnected community has shown to be a protective
						factor against developing a trauma related symptoms. Symptoms that
						can have a profound impact impact on our, as parents, mental health.
						By joining this community, you are taking the first step in
						recognizing you do not have to do this alone, because you are not
						alone! At minimum our goal with the creation of this community is to
						keep everyone in touch with at least an email from the chapter
						leader once a week. Taking this connections and friendship furthers
						is strongly encouraged, but not necessary.{' '}
					</div>
				</div>
				<div className='flex justify-center m-auto mb-20'>
					<Link href='/forum'>
						Have more questions? Ask the Heart Connected Community
					</Link>
				</div>
			</div>
		</div>
	);
}
