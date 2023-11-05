import { useState } from 'react';

type Props = {
	title: string;
	content: string;
	addComment: any;
	newComment: string;
	handleCommentInputChange: any;
};

export default function ForumAccordion(props: Props) {
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
				<div
					className='px-2'
					dangerouslySetInnerHTML={{
						__html: props.content,
					}}
				/>
				<div className='border-t mt-3'>
					<form
						onSubmit={props.addComment}
						className='pl-3 pb-3'
					>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold p mb-2 mt-3'
							htmlFor='topic'
						>
							Respond:
							<input
								type='text'
								value={props.newComment}
								onChange={props.handleCommentInputChange}
								className='shadow appearance-none border rounded w-full mt-2 mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								id='comment'
								placeholder='New Comment'
							/>
						</label>
						<button
							onClick={() => props.addComment(props.title)}
							type='submit'
						>
							Add Comment
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
