import { db } from '../firebase/clientApp';
import {
	getDocs,
	collection,
	// collection,
	QuerySnapshot,
	QueryDocumentSnapshot,
	DocumentData,
	query,
	// where,
	// limit,
	deleteDoc,
	doc,
	addDoc,
	onSnapshot,
	updateDoc,
	arrayUnion,
} from '@firebase/firestore';
import { useState, useEffect } from 'react';
import ForumAccordion from './ForumAccordion';

const collection_name = 'forums';

export default function Forum() {
	const [loading, setLoading] = useState(true);
	const [forums, setForums] = useState([]);
	const [newForum, setNewForum] = useState('');
	const [newComment, setNewComment] = useState('');

	const handleFormInputChange = (e) => {
		setNewForum(e.target.value);
	};
	const handleCommentInputChange = (e) => {
		setNewComment(e.target.value);
	};

	// add item to database
	const addForum = async (e) => {
		e.preventDefault();
		if (newForum !== '') {
			// setForums([...forums, newComment])
			await addDoc(collection(db, collection_name), {
				Title: newForum.trim(),
			});
			setNewForum('');
		}
	};

	// const updateUser = async (id, updates) => {
	// 	await firestore.collection('forums').doc(id).update(updates);
	// 	const doc = await Firestore.collection('forums').doc(id).get();

	// 	const user = {
	// 		id: doc.id,
	// 		...doc.data(),
	// 	};
	// 	console.log(user);
	// 	return user;
	// };

	// add comment to forum question
	const addComment = async (title: string) => {
		// e.preventDefault();
		let index = 0;
		if (newComment !== '') {
			// where Title === title
			// loop through until Comment[index] doesn't exist
			// if Comment${index} exists {
			//     index ++
			// }
			// if ()
			const forumRef = doc(
				db,
				'forums',
				'I just got a diagnosis, what do I do now?'
			);
			console.log('comment', newComment);
			console.log('forumRef', forumRef);
			await updateDoc(forumRef, {
				Comment2: newComment.trim(),
			});
			// setNewComment('');
		}
	};

	// read items from database
	useEffect(() => {
		const q = query(collection(db, collection_name));
		const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
			let forumsArr = [];
			QuerySnapshot.forEach((doc) => {
				forumsArr.push({ ...doc.data(), id: doc.id });
			});
			setForums(forumsArr);
			return () => unsubscribe;
		});

		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	// delete items from database
	// create delete button. onclick
	const deleteItem = async (id) => {
		await deleteDoc(doc(db, collection_name, id));
	};

	return (
		<div className='w-screen flex flex-col'>
			<div
				className='flex flex-col mx-auto justify-center mb-6'
				id='accordion-collapse'
				data-accordion='collapse'
			>
				<div className='text-center text-white font-bold text-2xl mx-auto w-full bg-purple rounded-t-2xl p-4'>
					Forums
				</div>
				{/* {findAll()} */}
				{loading ? (
					<div className='mx-auto w-3/4'>
						<h2>Loading...</h2>
					</div>
				) : forums.length === 0 ? (
					<div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
						<h2>No forum questions</h2>
						<p>
							Consider asking a question <a href='/add-forum'>here</a>
						</p>
					</div>
				) : (
					<div className='mx-auto w-full bg-indigo rounded-b-2xl p-6'>
						{forums.map((forum, id) => (
							<div key={id}>
								<ForumAccordion
									title={forum.Title}
									content={forum.Comment}
									addComment={addComment}
									newComment={newComment}
									handleCommentInputChange={handleCommentInputChange}
								/>
							</div>
						))}
					</div>
				)}
				<div className='m-auto w-3/4 mt-5 flex flex-col justify-center'>
					<form
						onSubmit={addForum}
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
								onChange={handleFormInputChange}
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
