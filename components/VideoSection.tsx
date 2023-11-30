import React, { useState } from 'react';
import VideoModal from '@/components/VideoModal';
import Image from 'next/image';
import VideoContent from '@/content/videoContent';

export default function VideoSection() {
	const [showVideo0, setShowVideo0] = React.useState<boolean>(false);
	const [showVideo1, setShowVideo1] = React.useState<boolean>(false);
	const [showVideo2, setShowVideo2] = React.useState<boolean>(false);

	const handleVideoShow = (index: number) => {
		if (index === 0) setShowVideo0(true);
		if (index === 1) setShowVideo1(true);
		if (index === 2) setShowVideo2(true);
	};

	const videoBoxStyles =
		'h-72 w-full max-w-sm relative video items-center flex justify-center text-center m-auto mb-5 hover:cursor-pointer';
	const textBoxStyles =
		'h-72 w-full z-20 max-w-sm flex-col bg-teal flex text-4xl text-black rounded-lg justify-center items-center px-4 text-center m-auto hover:opacity-0 transition ease-in-out duration-500 bg-teal absolute top-0';
	return (
		<>
			{showVideo0 && (
				<VideoModal
					setShowVideo={setShowVideo0}
					title={'Living with Congenital Heart Disease'}
					video={'Mv4VemH-bz0'}
					credit={"Murdoch Children's Research Institute"}
				/>
			)}
			{showVideo1 && (
				<VideoModal
					setShowVideo={setShowVideo1}
					title={'Day in the Life with CHD'}
					video={'-cEfxl_2xLw'}
					credit={'Adventures with Zanna'}
				/>
			)}
			{showVideo2 && (
				<VideoModal
					setShowVideo={setShowVideo2}
					title={'Welcome to the World of CHD'}
					video={'I9Rmys6HnEE'}
					credit={'Michael Klepser'}
				/>
			)}

			{VideoContent.map((video, index) => (
				<div
					key={index}
					className='video-wrapper flex flex-col justify-center lg:flex-row mb-8'
				>
					<div className={videoBoxStyles}>
						<button onClick={() => handleVideoShow(index)}>
							<div className={textBoxStyles}>{video.copy}</div>
							<div className="z-10 justify-center align-center flex'">
								<Image
									src={video.imgSrc}
									width={400}
									height={200}
									alt={video.copy}
									className='rounded-lg'
								/>
								<Image
									src='/video_stills/play.png'
									width={100}
									height={100}
									alt=''
									className='absolute top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2'
								/>
							</div>
							<div className='text-xs text-left'>{video.caption}</div>
						</button>
					</div>
				</div>
			))}
		</>
	);
}
