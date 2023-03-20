import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

function ProfilePic() {
  const [status, setStatus] = useState(false)

  const update = async () => {
    const { value: file } = await Swal.fire({
      title: 'Select image',
      input: 'file',

      inputAttributes: {
        'accept': 'image/*',
        'aria-label': 'Upload your profile picture'
      }
    })

    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        Swal.fire({

          title: "img",
          imageUrl: e.target.result,
          imageHeight: 400,
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Update',
          denyButtonText: `Change`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            uploadimg(file)

          } else if (result.isDenied) {
            update()
          }
        })
      }
      reader.readAsDataURL(file)
    }

    function uploadimg(file) {
      const Token = localStorage.getItem("token");
      let Stoken = JSON.stringify({ Token })
      let formData = new FormData();
      formData.append("image", file)
      console.log(formData, "*********************************************");
      setStatus(false)
      // axios.post(`${imageupload}/${Stoken}`, formData,).then((res) => {
      //   setImage(res.data.image)
      //   dispatch(changeImage(res.data.image))
      // }).catch((err) => {
      //   console.log(err);
      // })
    }


  }

  const remove = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setStatus(false)

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })



  }
  return (
    
      <div className="w-full max-w-sm bg-white border rounded-md border-gray-200 rounded-lg shadow">
        <div className="flex justify-end px-4 pt-4">
          <button

            onClick={() => setStatus(!status)}
            className="inline-block text-gray-500 hover:bg-gray-100   text-sm p-1.5"
            type="button"
          >
            <span className="sr-only">Open dropdown</span>
            <svg
              className="w-10 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>

          {/* Dropdown menu */}
          {status === true ? (

            <div

              id="dropdown"
              className="z-10 absolute top-36  text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
            >
              <ul className="py-2" aria-labelledby="dropdownButton">
                <li>
                  <Link
                    onClick={update}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                  >
                    Update Picture
                  </Link>
                </li>
                <li >
                  <Link
                    onClick={remove}
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 "
                  >
                    Delete Picture
                  </Link>
                </li>
              </ul>
            </div>

          ) : <div></div>}

        </div>








        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100"
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900">
            Bonnie Green
          </h5>
          <span className="text-sm text-gray-500 ">
            Visual Designer
          </span>

        </div>
      </div>

   
  )
}

export default ProfilePic