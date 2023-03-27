import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Sample from '../../modals/Sample';
import UpdateCV from '../../modals/updateCV';
function CV() {

  const profile = useSelector((state) => state.candidateprofile)

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  
  function downloadFile() {
    const url = profile.curriculum_vitae;
    const fileName = 'file.pdf'; 
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
      });
  }
  



  return (
    <div className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md ">

      <div>
        <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
          Update CV
        </h1>
        <p className="mt-2 text-sm text-gray-600 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi

          eos.
        </p>
      </div>
      <hr />

      <div>
        <label
          htmlFor="image"
          className="block text-sm text-gray-500 dark:text-gray-300"
        >

        </label>




        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            onClick={() => window.open(profile.curriculum_vitae, "_blank")}
            className="inline-flex items-center px-2  text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
          >
            <svg
              aria-hidden="true"
              className="w-4 h-4 mr-2 fill-current"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
            View
          </button>
          <button
            type="button"
            onClick={handleClick}
            className="inline-flex items-center px-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
          >
            <svg
              aria-hidden="true"
              className="w-4 h-4 mr-2 fill-current"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
            </svg>
            Update
          </button>
          {showModal && <UpdateCV onClose={handleClose} cv={profile.courseAnd_certification} />}
          <button
            type="button"
            onClick={() => downloadFile()}
            className="inline-flex items-center px-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
          >
            <svg
              aria-hidden="true"
              className="w-4 h-4 mr-2 fill-current"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                clipRule="evenodd"
              />
            </svg>
            Download
          </button>
        </div>

      </div>

    </div>


  )
}

export default CV