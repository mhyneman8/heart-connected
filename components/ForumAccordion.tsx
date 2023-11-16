import { useState } from 'react';
import { db } from '../firebase/clientApp';
import { updateDoc, doc, arrayUnion } from '@firebase/firestore';

type Props = {
	question: string;
	comments: Array<string>;
	id: string;
};

export default function ForumAccordion(props: Props) {
	const [isShowing, setIsShowing] = useState(false);
	const [newComment, setNewComment] = useState('');
	const comments = props.comments || [];

	const toggle = () => {
		setIsShowing(!isShowing);
	};

	const addComment = (e: any) => {

		e.preventDefault();
		const docRef = doc(db, 'forums', props.id);
		comments.push(newComment)
		updateDoc(docRef, {
			comments: arrayUnion(newComment),
		})
		.then(() => {
			setNewComment('')
		})
	}

	const handleChange = (e: any) => {
		console.log(e.target.value)
		setNewComment(e.target.value)
		console.log('setnewcomment', newComment)
	}

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
				<p>{props.question}</p>
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
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M9 5 5 1 1 5'
					/>
				</svg>
			</button>
			<div
				style={{ display: isShowing ? 'block' : 'none', padding: '5px' }}
				className='bg-white rounded-b-xl p-6 text-black shadow-lg'
			>
			{ comments.map((comment, index) => (
				<div
					key={index}
					className='px-2'
					dangerouslySetInnerHTML={{
						__html: comment,
					}}
				/>

			))}
				<div className='border-t mt-3'>
					<form
						className='pl-3 pb-3'
						onSubmit={addComment}
					>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold p mb-2 mt-3'
							htmlFor='topic'
						>
							Respond:
							<input
								type='text'
								value={newComment}
								onChange={(e) => handleChange(e)}
								className='shadow appearance-none border rounded w-full mt-2 mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								id={props.id}
								placeholder='New Comment'
							/>
						</label>
						<button
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
