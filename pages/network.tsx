import Heading from '@/components/Heading';
import Navigation from '@/components/Navigation';
import NetworkModal from '@/components/NetworkModal';
import { useState } from 'react';
import Forum from '@/components/Forum';
import Image from 'next/image';

// command to start mongodb: brew services start mongodb-community
// command to stop mongoDB: brew services stop mongodb-community
// launch the shell: mongosh
// list all databases: show dbs
// which database MongoDB is currently in: db
// create new DB or switch to DB: use [database name]
// heartsConnectedDB
// view all collections in db: db.getCollectionNames()
// create a new collection: db.createCollection("users")
// insert new document into collection: db.[collectionName].insertOne(document-to-insert)
// read documents: db.[collectionName].find()
// find document that meets condition: db.[collectionName].find( [Condition] ): ex: db.users.find( {"Location.City": "Chicago"})
// update field: db.users.updateOne( {"Name.First": "Mallory"}, { $set: { "Location.city": "Tulsa"}})
// add new field: db.users.update( [condition of which items to update], { $push: { [name of key to add]: "value"} })
// delete 1 collection: db.[collectionName].deleteOne({ "Genre.Name": "Comedy" })
// delete multiple collections: db.[collectionName].deleteMany({ "Genre.Name": "Comedy" })
//

// Mural can be found on the corner of Irving Park and Francisco in the Albany Park neighborhood of Chicago. All credit goes to Christian Paz.

export default function Network() {
	const [showModal, setShowModal] = useState(false);

	return (
		<div>
			<Navigation />
			<Heading imgSrc={'/pics/Strength_connection.jpg'} heading='Join the Heart Connected Community' />
			<div className='body'>
				{showModal && (
					<NetworkModal
						setShowModal={setShowModal}
					/>
				)}

				<div className='h6 w-3/4 m-auto mb-8 text-lg'>
					This social experiment is aimed at forming a strong connection between
					families who are living with CHD. We understand no one can better
					understand and support parents and families with CHD than others who
					have or are or will be on the long journey of caring for a child with
					CHD.
				</div>
				<div className='h6 w-3/4 m-auto mb-8 text-lg'>
					Whether you are a person living with Congenital Heart Disease or you
					love someone who does, we&apos;d love to have you as a valued member
					of our community. You&apos;ll be connected to others just like you who
					enjoy the support, education and connection our organization provides.
					Join us today!
				</div>
				<div className='flex justify-center'>
					<button
						className='text-white font-bold px-8 py-3 rounded-full m-auto w-fit bg-cyan shadow hover:shadow-lg outline-none focus:outline-none mb-10'
						type='button'
						onClick={() => setShowModal(true)}
					>
						Join Our Community
					</button>
				</div>
				<div className='h6 w-3/4 m-auto mb-8 text-lg'>
					<div className='font-bold'>Benefits of joining: </div>
					<div>
						A strong, interconnected community has shown to be a protective
						factor against developing a trauma related symptoms. Symptoms that
						can have a profound impact impact on our, as parents, mental health.
						By joining this community, you are taking the first step in
						recognizing you do not have to do this alone, because you are not
						alone! At minimum our goal with the creation of this community is to
						keep everyone in touch with at least an email from the chapter
						leader once a week. Taking this connections and friendship furthers
						is strongly encouraged, but not necessary.{' '}
					</div>
				</div>
				<Forum />
			</div>
		</div>
	);
}
