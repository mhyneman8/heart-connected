import React, { useState } from 'react';


export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [thankYou, setThankYou] = useState(false);
  const initialFormData = {
    first: '',
    diagnosis: '',
  };

  interface ErrorMessage {
    first: string;
    diagnosis: string;
  };

  const errorMessage: ErrorMessage = {
    first: '',
    diagnosis: '',
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

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setErrorMessages(validate(formData));
  };

  const handleSubmit = async () => {
    console.log('submit')
    setErrorMessages(validate(formData));
    setThankYou(true)
    setTimeout(() => {
      setShowModal(false);
    }, 10000)
  };

  const validate = (formValues: any) => {
    let error: ErrorMessage = {
      first: '',
      diagnosis: '',
    };

    console.log(formValues);
    !formValues.first ? error.first = 'Please enter first name' : error.first = '';
    !formValues.diagnosis ? error.diagnosis = 'Please enter diagnosis' : error.diagnosis = '';
    return error;
  };


  const labelStyle = 'block text-black text-sm font-bold mb-1 pl-2 mt-0';
  const inputStyle = 'shadow appearance-none border rounded w-full py-2 px-3 text-black';
  const errorStyle = 'text-red-500 text-xs pl-2';

  return (
    <div className='text-center'>
      <button
        className="text-white font-bold px-8 py-3 rounded-full m-auto w-fit bg-cyan shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type='button'
        onClick={() => setShowModal(true)}
      >
        Join Our Network
      </button>
      {showModal ? (
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
               
                {thankYou ? (
                  <div className="message">
                      <div className="title text-4xl p-5">
                        Thank you {formData.first} for joining us!
                      </div>
                      <div className="content text-lg p-8 mx-10">
                        You will receive an email shortly with other network members contact information
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
                )}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}


// export default function Modal() {

    
//     // el.addEventListener('click', (e) => {
//     //   if ((e.target as HTMLElement).getAttribute('data-dismiss') === 'modal') {
//     //     e.preventDefault();
//     //     close();
//     //   }
//     // });
    
//     // const open = () => {
//     //   document.documentElement.style.overflow = 'hidden'; // lock scrolling
//     //   el.classList.add('is-active');
//     // }
    
//     // const close = () => {
//     //   document.documentElement.style.overflow = 'visible';
//     //   el.classList.remove('is-active');
//     // }

//     // return (
//     //     <div 
//     //         className="network"
//     //         tabIndex={-1}
//     //         role='dialog'
//     //         aria-labelledby='modal-label'
//     //         aria-modal='true'
//     //         aria-hidden='true'
//     //     >
//     //       <div className='network__backdrop bg-fixed top-0 left-0 right-0 bottom-0 w-full h-full z-50 overflow-hidden flex items-center justify-center' data-dismiss="modal"></div>
//     //       <section className='network__inner'>
//     //         {/* <button type="button" className={styles.network__close-icon} title="Close" data-dismiss="modal" aria-label="Close dialog"></button> */}
//     //         <div className='network__header'>
//     //           <h1>Modal Header</h1>
//     //         </div>
//     //         <div className='network__content'>
//     //           Modal Content
//     //         </div>
//     //         <div className='network__footer'>
//     //           Modal Footer
//     //         </div>
//     //       </section>
//     //     </div>
//     // )

// }