import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'


import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";

import OtpInput from "otp-input-react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth, provider } from "../../../utils/firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber, signInWithPopup } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";



import axios from 'axios'

// import { toast } from 'react-toastify';

export default function PhoneModal({ onClose }) {
  const [modalOne, setmodalOne] = useState(true)
  const [open, setOpen] = useState(true)
  const cancelButtonRef = useRef(null)
  const [error, setError] = useState("")


  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);


  const handleClose = () => {
    setOpen(false);
    onClose();
  }
  const handleSubmit = () => {

  }

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => { },
        },
        auth
      );
    }
  }
  const onSignup = () => {
    console.log(ph);
    setLoading(true);
    onCaptchVerify();
  }




  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={handleClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              {modalOne ? (
                <div className="for phone number">

                  <div className="">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      OTP login
                    </Dialog.Title>
                    <div className="mt-2">
                      <div>
                        <p className='text-gray-500'>
                          Please enter your mobile number in the field provided and click on the 'Send OTP' button. You will receive a unique OTP code on your mobile number that you will need to enter on the next page to gain access to your account.
                        </p>
                      </div>
                      <>
                        <div className="bg-white text-gray-500 w-fit mx-auto p-4 rounded-full">
                          <BsTelephoneFill size={30} />
                        </div>
                        <label
                          htmlFor=""
                          className="font-bold text-xl text-white text-center"
                        >
                          Verify your phone number
                        </label>
                        <PhoneInput country={"in"} value={ph} onChange={setPh} />

                      </>
                    </div>
                  </div>
                  {error && (
                    <p className='text-red-500'>
                      {error}
                    </p>
                  )}
                  <div className="mt-5 sm:mt-6">
                    <button
                      onClick={onSignup}
                      className="bg-gray-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                    >
                      {loading && (
                        <CgSpinner size={20} className="mt-1 animate-spin" />
                      )}
                      <span>Send code via SMS</span>
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm disabled:opacity-50"
                      onClick={handleClose}
                    // disabled={isProcessing}
                    // ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="for OTP">

                  <div className="">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      OTP login
                    </Dialog.Title>
                    <div className="mt-2">
                      <div>
                        <p className='text-gray-500'>
                        </p>
                      </div>
                      <div className=''>
                        <label
                          className="text-gray-700 text-sm"
                          htmlFor="PhoneNumber"
                        >
                          Enter OTP received on registred Mobile number
                        </label>
                        <input
                          id="skills"
                          type="text"
                          name='key_skills'

                          className='validation-true'

                        />
                      </div>
                    </div>
                  </div>
                  {error && (
                    <p className='text-red-500'>
                      {error}
                    </p>
                  )}
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-lightDarkBlue text-base font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 sm:text-sm disabled:opacity-50"
                      onClick={handleSubmit}
                    // disabled={isProcessing}
                    >
                      Verify
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm disabled:opacity-50"
                      onClick={handleClose}
                    // disabled={isProcessing}
                    // ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}



            </div>
          </Transition.Child>
        </div>

      </Dialog>
    </Transition.Root >)
}
