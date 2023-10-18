import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

type Video = {
    videoId: string;
}

export default function YouTubePlayer({ videoId }: Video) {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        const player = event.target;

        player.pauseVideo();
    };

    const opts: YouTubeProps['opts'] = {
        height: '100%',
        width: '100%',
        playerVars: {
            // autoplay: 0,
        },
    };

    const onError = (error: unknown) => {
        console.error('YouTube Player Error:', error);
    };

    return (
        <YouTube
            videoId={videoId}
            opts={opts}
            onReady={onPlayerReady}
            onError={onError}
        />
    );
};