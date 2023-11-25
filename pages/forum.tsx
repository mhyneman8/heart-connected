import Heading from '@/components/Heading';
import Navigation from '@/components/Navigation';
import ExternalLink from '@/components/ExternalLink';
import ImageNext from 'next/image';
import resources from '@/content/resources';
import Link from 'next/link';
import ResourcesAccordion from '@/components/ResourcesAccordion';
import Image from 'next/image';
import { db } from '../firebase/clientApp';
import { collection, query, addDoc, onSnapshot } from '@firebase/firestore';
import { useState, useEffect, ReactEventHandler } from 'react';
import ForumAccordion from '@/components/ForumAccordion';
import styles from '@/components/styles.module.css';

const collection_name = 'forums';

type Forum = {
	question: string;
	comments: Array<string>;
	id: string;
};
// export default function Forum() {
// 	return (
// 		<div className='max-w-[1000px] m-auto'>
// 			<Navigation />
// 			<Heading
// 				credit={''}
// 				imgSrc={'/pics/Therapy_Resources.jpg'}
// 				heading='Resources for Those With Congenital Heart Disease'
// 			/>

// 			<div className='body flex flex-col justify-center mb-8 mt-[-30px] para'></div>
// 		</div>
// 	);
// }

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
		<div className='max-w-[1000px] m-auto'>
			<Navigation />
			<Heading
				credit={''}
				imgSrc={'/morepics/Together.jpg'}
				heading='Share, Support, Connect'
			/>
			<div className='body flex flex-col justify-center mb-8 mt-[-30px]'>
				<div
					className='flex flex-col justify-center m-auto max-w-[1000px] w-11/12'
					id='forum'
				>
					<div className='para mb-10 w-9/12 text-base m-auto'>
						Welcome to our Heart Connected forum, a dedicated space for families
						navigating the journey of Congenital Heart Defects (CHD) diagnosis.
						Here, we come together as a supportive community to share
						experiences, offer guidance, and foster connections that transcend
						the challenges posed by CHD.
					</div>
					<div className='para mb-10 w-9/12 text-base m-auto'>
						In this compassionate environment, we embrace the strength that
						comes from unity, understanding, and the collective wisdom of
						families who have walked similar paths. Whether you&apos;re seeking
						advice, sharing triumphs, or simply connecting with those who
						understand, our forum is a haven where hearts unite, and the love
						and resilience of our families shine. Join us on this journey, where
						each heartbeat is a testament to the power of community and the
						unwavering strength found in the heartful bonds we share.
					</div>
					<div
						className='flex flex-col mx-auto w-full justify-center mb-6'
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
										className='shadow appearance-none border rounded w-full mt-3 py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
										id='topic'
										placeholder='Topic'
									/>
								</label>
								<button
									type='submit'
									className={styles.primaryBtn}
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
