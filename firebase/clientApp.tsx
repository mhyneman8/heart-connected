import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// if (db === null) {
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
	experimentalForceLongPolling: true,
	useFetchStreams: false,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// const firestore = getFirestore();

// // Adds a text or image message to Cloud Firestore.
// const addMessage = async(textMessage: string | null, imageUrl: string | null): Promise<void | DocumentReference<DocumentData>> => {
//     let data: any;
//     try {
//       this.user$.subscribe(async (user) =>
//       {
//         if(textMessage && textMessage.length > 0) {
//           data =  await addDoc(collection(this.firestore, 'messages'), {
//             name: user?.displayName,
//             text: textMessage,
//             profilePicUrl: user?.photoURL,
//             timestamp: serverTimestamp(),
//             uid: user?.uid
//           })}
//           else if (imageUrl && imageUrl.length > 0) {
//             data =  await addDoc(collection(this.firestore, 'messages'), {
//               name: user?.displayName,
//               imageUrl: imageUrl,
//               profilePicUrl: user?.photoURL,
//               timestamp: serverTimestamp(),
//               uid: user?.uid
//             });
//           }
//           return data;
//         }
//       );
//     }
//     catch(error) {
//       console.error('Error writing new message to Firebase Database', error);
//       return;
//     }
// }
