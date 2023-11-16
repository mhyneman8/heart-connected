import Image from "next/image";

type Heading = {
    heading: string;
    imgSrc: string;
    credit: string;
}

export default function Heading({ heading, imgSrc, credit }: Heading) {
    return (
        // <div className="hero flex flex-col justify-center mb-20">
        <div className='hero h-full min-h-[70vh] max-w-[1000px] m-auto mt-20 flex flex-col justify-end relative mb-20'>
            <Image
					src={imgSrc}
					fill={true}
					alt=''
				/>
                <div
					className='title mx-auto mb-8 lg:text-6xl md:text-5xl text-4xl max-w-xl text-center flex align-end text-white px-3 z-10 bg-sky-400/50 rounded'
					style={{ boxShadow: '0 0 10px 26px rgb(56 189 248 / .5)' }}
				>
                    {heading}
				</div>
                <div className='absolute bottom-[-35px] right-5 text-xs max-w-xs'>{credit}</div>
            {/* <div className="title text-7xl mx-auto mt-32 mb-16 text-center">{heading}</div> */}
        </div>
    )
}