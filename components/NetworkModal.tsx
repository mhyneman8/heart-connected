import React, { useState } from 'react';
import axios from 'axios';

type Props = {
  showModal: boolean,
  setShowModal: typeof React.useState,
  content: string,
}
interface ErrorMessage {
  first: string;
  diagnosis: string;
  email: string;
};
export default function NetworkModal({ showModal, setShowModal, content }: Props) {
  const [thankYou, setThankYou] = useState(false);
  const initialFormData = {
    first: '',
    diagnosis: '',
  };


  const errorMessage: ErrorMessage = {
    first: '',
    diagnosis: '',
    email: '',
  }

  const [formData, setFormData] = useState(initialFormData);
  const [errorMessages, setErrorMessages] = useState(errorMessage);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(formData)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    setErrorMessages(await validate(formData));
  };

  const handleSubmit = async () => {
    console.log('submit')
    setErrorMessages(await validate(formData));
    setThankYou(true)
    setTimeout(() => {
      setShowModal(false);
    }, 10000)
  };

  const validate = async (formValues: any) => {
    let error: ErrorMessage = {
      first: '',
      diagnosis: '',
      email: '',
    };

    console.log(formValues);
    !formValues.first ? error.first = 'Please enter first name' : error.first = '';
    !formValues.diagnosis ? error.diagnosis = 'Please enter diagnosis' : error.diagnosis = '';
    if (!formValues.diagnosis) {
      error.diagnosis = 'Please enter email'
    } else if (formValues.email) {
      const axios = require('axios');

      const options = {
        method: 'GET',
        url: 'https://mailcheck.p.rapidapi.com/',
        params: {
          domain: 'mailinator.com'
        },
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          // 'X-RapidAPI-Key': '541ee9bbbdm/she44f2f5067ff118p18e848jsnf0be3ad4badb',
          'X-RapidAPI-Host': 'mailcheck.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    } else {
      error.diagnosis = '';
    }

    return error;
  };


  const labelStyle = 'block text-black text-sm font-bold mb-1 pl-2 mt-0';
  const inputStyle = 'shadow appearance-none border rounded w-full py-2 px-3 text-black';
  const errorStyle = 'text-red-500 text-xs pl-2';

  return (
    <div className='text-center'>
      { showModal ? (
        <>
          <div className="opacity-40 bg-black fixed inset-0 z-40"></div>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-9/12 max-w-screen-sm my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">
                    Connecting Hearts
                  </h3>
                  {/* close button */}
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-2xl hover:text-purple block py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                { thankYou ? (
                  <div className="message">
                    <div className="title text-4xl p-5">
                      Thank you {formData.first} for joining us!
                    </div>
                    <div className="content text-lg p-8 mx-10">
                      You will receive an email shortly with other community members contact information
                    </div>
                  </div>
                  ) : (
                    <>
                      <div className="relative p-6 flex-auto">
                        <form className="text-left rounded px-8 pt-6 pb-8 w-full" onSubmit={handleSubmit} >
                          <span className={errorStyle}>{errorMessages.first}</span>
                          <label className="block text-black text-sm font-bold mb-2 pl-2">
                            First Name
                          </label>
                          <input
                            className={inputStyle} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={formData.first}
                            name="first"
                          />
                          <label className={labelStyle} >
                            Last Name
                          </label>
                          <input 
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            className={inputStyle} 
                            name="last"
                          />
                          <span className={errorStyle}>{errorMessages.diagnosis}</span>
                          <label className={labelStyle}>
                            Diagnosis
                          </label>
                          <input 
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            className={inputStyle} 
                            value={formData.diagnosis}
                            name="diagnosis"
                          />
                          <label className={labelStyle}>
                            City
                          </label>
                          <input 
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            className={inputStyle} 
                            name="city"
                          />
                        </form>
                      </div>
                  
                      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          onClick={() => handleSubmit()}
                        >
                          Submit
                        </button>
                      </div>
                    </>
                  )
                }
              </div>
            </div>
          </div>
        </>
      ) : null }
    </div>
  )
}

