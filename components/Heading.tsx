import Image from 'next/image';

type Heading = {
	heading: string;
	imgSrc: string;
	credit: string;
};

export default function Heading({ heading, imgSrc, credit }: Heading) {
	return (
		// <div className="hero flex flex-col justify-center mb-20">
		<div className='hero h-full ml-[-20px] w-screen max-w-[1000px] m-auto flex flex-col justify-end relative mb-20'>
			<div className='relative mt-[75px] h-[292px] md:h-[475px]'>
				<Image
					src={imgSrc}
					fill={true}
					alt=''
					loading='lazy'
					sizes='(max-width: 768px) 100vw'
				/>
			</div>
			<div className='title mx-auto mb-8 absolute lg:text-6xl md:text-5xl text-4xl text-center flex align-end text-white w-full'>
				<div
					className='max-w-xl px-3 z-10 bg-sky-400/50 rounded m-auto'
					style={{ boxShadow: '0 0 10px 26px rgb(56 189 248 / .5)' }}
				>
					{heading}
				</div>
			</div>
			<div className='absolute bottom-[-35px] right-5 text-xs max-w-xs'>{credit}</div>
			{/* <div className="title text-7xl mx-auto mt-32 mb-16 text-center">{heading}</div> */}
		</div>
	);
}
