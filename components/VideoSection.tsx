import React, { useState } from 'react';
import VideoModal from '@/components/VideoModal';

export default function VideoSection() {
    const [showVideo, setShowVideo] = React.useState<boolean>(false);
    const [showVideo1, setShowVideo1] = React.useState<boolean>(false);
    const [showVideo2, setShowVideo2] = React.useState<boolean>(false);
    return (
        <>
            {showVideo && (
            <VideoModal setShowVideo={setShowVideo} content={''} video={"Mv4VemH-bz0"} />
            )}
            {showVideo1 && (
            <VideoModal setShowVideo={setShowVideo1} content={''} video={"-cEfxl_2xLw"} />
            )}
            {showVideo2 && (
            <VideoModal setShowVideo={setShowVideo2} content={''} video={"I9Rmys6HnEE"} />
            )}
            <div className="video-wrapper flex flex-col justify-center lg:flex-row mb-8">
            <div className="video m-auto my-5 w-1/2 hover:cursor-pointer">
                {/* <YouTubePlayer videoId="Mv4VemH-bz0" /> */}

                <div className="caption text-center mt-1">
                Living with Congenital Heart Disease
                </div>
                <button onClick={() => setShowVideo(true)}>
                turn to image
                </button>
            </div>
            <div className="video m-auto my-5 w-1/2">
                <div className="caption text-center mt-1">
                Day in the Life with CHD
                </div>
                <button onClick={() => setShowVideo1(true)}>
                turn to image
                </button>

            </div>
            <div className="video m-auto my-5 w-1/2">
                <div className="caption text-center mt-1">
                Welcome to the World of CHD
                </div>
                <button onClick={() => setShowVideo2(true)}>
                turn to image
                </button>
            </div>
            </div>
        </>
    )
}