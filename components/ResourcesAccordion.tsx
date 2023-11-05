import { useState } from 'react';
import ExternalLink from '@/components/ExternalLink';
import ImageNext from 'next/image';

export default function ForumAccordion(props) {
	const [isShowing, setIsShowing] = useState(false);

	const toggle = () => {
		setIsShowing(!isShowing);
	};

	return (
		<div className='my-2'>
			<button
				className='font-bold flex bg-white items-center justify-between w-full p-3 text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-1 focus:ring-teal hover:bg-gray-100'
				onClick={toggle}
				type='button'
				style={{
					borderRadius: isShowing ? '0.75rem 0.75rem 0 0' : '0.75rem',
				}}
			>
				<p>{props.title}</p>
				<svg
					data-accordion-icon
					className='w-3 h-3 shrink-0'
					aria-hidden='true'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 10 6'
					style={{
						transform: isShowing ? 'rotate(1deg)' : 'rotate(180deg)',
					}}
				>
					<path
						stroke='currentColor'
						stroke-linecap='round'
						stroke-linejoin='round'
						stroke-width='2'
						d='M9 5 5 1 1 5'
					/>
				</svg>
			</button>
			<div
				style={{ display: isShowing ? 'block' : 'none', padding: '5px' }}
				className='bg-white rounded-b-xl p-6 text-black shadow-lg'
			>
				<ul className='m-auto mt-4 text-xl flex justify-center flex-col px-3'>
					{props.content.map((resource) => (
						<li key={resource.key}>
							<div className='flex col items-center'>
								{resource.imgSrc && (
									<ImageNext
										src={resource.imgSrc}
										alt={resource.text}
										width={resource.width}
										height={resource.height}
										className='mr-2'
									/>
								)}
								<ExternalLink
									link={resource.link}
									name={resource.text}
								/>
							</div>
							<div className='ml-11 text-sm mb-5'>{resource.description}</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
