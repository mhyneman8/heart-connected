import { db } from '../firebase/clientApp';
import { collection, query, addDoc, onSnapshot } from '@firebase/firestore';
import { useState, useEffect, ReactEventHandler } from 'react';
import ForumAccordion from './ForumAccordion';

const collection_name = 'forums';

type Forum = {
	question: string;
	comments: Array<string>;
	id: string;
};

export default function Forum() {
	const [loading, setLoading] = useState(true);
	const [forums, setForums] = useState([]);
	const [newForum, setNewForum] = useState('');

	// add item to database
	const addForum = async (e: any) => {
		e.preventDefault();

		if (newForum !== '') {
			await addDoc(collection(db, 'forums'), {
				question: newForum.trim(),
				comments: [],
			});
		}
	};

	// 	const forumDocuments = await getDocs(collection(db, 'forums'));
	// 	let newForum = [];
	// 	forumDocuments.forEach(docObject => {
	// 		newForum.push({ id: docObject.id, ...docObject.data()})
	// 	})
	// 	setForums(newForum)
	// 	console.log(forums)
	// }

	// read items from database
	useEffect(() => {
		const q = query(collection(db, collection_name));
		const unsubscribe = onSnapshot(q, (documentSnapshot) => {
			let forumsArr: any = [];
			documentSnapshot.forEach((doc) => {
				forumsArr.push({ id: doc.id, ...doc.data() });
			});
			console.log(forumsArr);
			setForums(forumsArr);
		});
		setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => {
			if (unsubscribe) unsubscribe;
		};
	}, []);

	return (
		<div
			className='w-screen flex flex-col'
			id='forum'
		>
			<div
				className='flex flex-col mx-auto justify-center mb-6'
				id='accordion-collapse'
				data-accordion='collapse'
			>
				<div className='text-center text-white font-bold text-2xl mx-auto w-full bg-purple rounded-t-2xl p-4'>
					Forums
				</div>
				{loading ? (
					<div className='mx-auto w-3/4'>
						<h2>Loading...</h2>
					</div>
				) : forums.length === 0 ? (
					<div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
						<h2>No forum questions</h2>
						<p>Be the first to start a conversation!</p>
					</div>
				) : (
					<div className='mx-auto w-full bg-indigo rounded-b-2xl p-6'>
						{forums.map((forum: Forum, id) => (
							<div key={id}>
								<ForumAccordion
									question={forum.question}
									comments={forum.comments}
									id={forum.id}
								/>
							</div>
						))}
					</div>
				)}
				<div className='m-auto w-3/4 mt-5 flex flex-col justify-center'>
					<form
						onSubmit={addForum}
						// onClick={(e) => addForum(e)}
						className='m-auto flex flex-col justify-center'
					>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							htmlFor='topic'
						>
							Enter New Forum Question:
							<input
								type='text'
								value={newForum}
								onChange={(e) => setNewForum(e.target.value)}
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								id='topic'
								placeholder='Topic'
							/>
						</label>
						<button type='submit'>Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
}
