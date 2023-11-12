import React from 'react';

type Video = {
    videoId: string;
}

export default function YouTubePlayer({ videoId }: Video) {
    const url = 'https://www.youtube.com/embed/' + videoId;

    return (
        <iframe 
            width="560" 
            height="315" 
            src={url}
            frameBorder="0" 
            allow="data-allow" 
            allowFullScreen
        />
    );
};