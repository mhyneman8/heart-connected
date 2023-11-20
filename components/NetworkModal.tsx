import React, { useState } from 'react';
import axios from 'axios';
import styles from './styles.module.css';

type Props = {
	// showModal: boolean,
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};
interface ErrorMessage {
	first: string;
	diagnosis: string;
	email: string;
}
export default function NetworkModal({ setShowModal }: Props) {
	const [thankYou, setThankYou] = useState<boolean>(false);
	const initialFormData = {
		first: '',
		diagnosis: '',
	};

	let errorMessage: ErrorMessage = {
		first: '',
		diagnosis: '',
		email: '',
	};

	const [formData, setFormData] = useState(initialFormData);
	const [errorMessages, setErrorMessages] = useState(errorMessage);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		console.log(formData);
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
		setErrorMessages(await validate(formData));
	};

	const handleSubmit = async () => {
		console.log('submit');
		setErrorMessages(await validate(formData));
		console.log(errorMessage);
		if (
			errorMessage.first === '' &&
			errorMessage.email === '' &&
			errorMessage.diagnosis === ''
		) {
			console.log('no error');
			setThankYou(true);
			setTimeout(() => {
				setShowModal(false);
			}, 10000);
		}
		console.log('errror');
	};

	const validate = async (formValues: any) => {
		let error: ErrorMessage = {
			first: '',
			diagnosis: '',
			email: '',
		};

		// validate name is not blank
		if (!formValues.first) {
			error.first = 'Please enter your full name';
			// return false;
		} else {
			error.first = '';
		}

		// validate diagnosis isn't blank
		if (!formValues.diagnosis) {
			error.diagnosis = 'Please enter diagnosis';
			// return false;
		} else {
			error.diagnosis = '';
		}

		// email is valid
		if (!formValues.email) {
			error.email = 'Please enter email';
		} else if (formValues.email) {
			const axios = require('axios');

			const options = {
				method: 'GET',
				url: 'https://mailcheck.p.rapidapi.com/',
				params: {
					domain: 'mailinator.com',
				},
				headers: {
					'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
					// 'X-RapidAPI-Key': '541ee9bbbdm/she44f2f5067ff118p18e848jsnf0be3ad4badb',
					'X-RapidAPI-Host': 'mailcheck.p.rapidapi.com',
				},
			};

			try {
				const response = await axios.request(options);
				console.log('axios response data', response.data);
			} catch (error) {
				console.error('error', error);
			}
		} else {
			error.email = '';
		}

		errorMessage = error;
		return error;
	};

	// const labelStyle =
	// 	'inline text-black text-sm font-bold mb-1 ml-1 text-left';
	const inputStyle =
		'shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-black';
	const errorStyle = 'text-red-500 text-xs';

	return (
		<div className='text-center'>
			<>
				<div className='opacity-40 bg-black fixed inset-0 z-40'></div>
				<div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
					<div className='relative w-9/12 max-w-screen-sm my-6 mx-auto max-w-3xl'>
						<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
							<div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t '>
								<h3 className='text-3xl font=semibold'>
									Connecting Hearts Network
								</h3>
								{/* close button */}
								<button
									className='bg-transparent border-0 text-black float-right'
									onClick={() => setShowModal(false)}
								>
									<span className='text-black opacity-7 h-6 w-6 text-2xl hover:text-purple block py-0 rounded-full'>
										x
									</span>
								</button>
							</div>
							{thankYou ? (
								<div className='message'>
									<div className='title text-4xl p-5'>
										Thank you {formData.first} for joining us!
									</div>
									<div className='content text-lg p-8 mx-10'>
										You will receive an email shortly with other community
										members contact information
									</div>
								</div>
							) : (
								<>
									<div className='relative px-8 flex-auto'>
										<form
											className='text-left rounded pt-3 pb-8 w-full'
											onSubmit={handleSubmit}
										>
											{/* <label className={labelStyle}>Full Name</label> */}
											<span className={errorStyle}>{errorMessages.first}</span>
											<input
												className={inputStyle}
												onChange={handleChange}
												// onBlur={() => handleBlur}
												value={formData.first}
												placeholder='Full Name'
												name='first'
											/>
											{/* <label className={labelStyle}>Email</label> */}
											<span className={errorStyle}>{errorMessages.email}</span>
											<input
												onChange={handleChange}
												// onBlur={() => handleBlur}
												className={inputStyle}
												name='email'
												placeholder='Email'
											/>
											{/* <label className={labelStyle}>Diagnosis</label> */}
											<span className={errorStyle}>
												{errorMessages.diagnosis}
											</span>
											<input
												onChange={handleChange}
												// onBlur={handleBlur}
												className={inputStyle}
												value={formData.diagnosis}
												name='diagnosis'
												placeholder='Diagnosis'
											/>
											{/* <label className={labelStyle}>City</label> */}
											<input
												onChange={handleChange}
												// onBlur={handleBlur}
												className={inputStyle}
												name='city'
												placeholder='City'
											/>
										</form>
									</div>

									<div className='flex items-center gap-2.5 justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
										<button
											className={styles.secondaryBtn}
											type='button'
											onClick={() => setShowModal(false)}
										>
											Cancel
										</button>
										<button
											className={styles.primaryBtn}
											type='button'
											onClick={() => handleSubmit()}
										>
											Submit
										</button>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</>
		</div>
	);
}
