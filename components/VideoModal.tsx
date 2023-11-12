import React, { useState } from 'react';

type Props = {
  setShowVideo: React.Dispatch<React.SetStateAction<boolean>>,
  credit: string,
  video: string,
  title?: string,
}

export default function VideoModal({ setShowVideo, credit, video: videoId, title }: Props) {
  const url = 'https://www.youtube.com/embed/' + videoId;
  
  return (
    <div className='text-center'>
      <div className="opacity-40 bg-black fixed inset-0 z-40"></div>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
            style={{ minWidth: '80vw', minHeight: '60vh' }}
          >
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                <h3 className="text-3xl font=semibold">
                  {title}
                </h3>
                {/* close button */}
                <button
                  className="bg-transparent border-0 text-black float-right"
                  onClick={() => setShowVideo(false)}
                >
                  <span className="text-black opacity-7 h-6 w-6 text-2xl hover:text-purple block py-0 rounded-full">
                    x
                  </span>
                </button>
            </div>
            <div className="relative p-6 flex justify-center">
              <iframe 
                width="560" 
                height="315" 
                src={url}
                frameBorder="0" 
                allow="data-allow" 
                allowFullScreen
              />
            </div>
        
            <div className=" p-6 border-t flex justify-between items-center border-solid border-blueGray-200 rounded-b">
              <div className='font-bold text-sm'>
                Video by: {credit}
              </div>
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => setShowVideo(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

