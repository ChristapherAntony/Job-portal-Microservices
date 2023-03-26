
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useSelector, useDispatch } from 'react-redux'
import { changeCandidateProfile } from '../../../Redux/candidateProfileReducer'
import axios from 'axios'
import { updatePersonalInfo } from '../../../utils/Constants'

export default function PersonalInfoModal({ onClose }) {
    const dispatch = useDispatch()
    const [error, setError] = useState("")
    const [open, setOpen] = useState(true)
    const profile = useSelector((state) => state.candidateprofile)

    const [form, setForm] = useState({
        user_name: profile.user_name,
        email: profile.email,
        phone_number: profile.phone_number,
        date_of_birth: profile.date_of_birth,
        gender: profile.gender,
        current_location: profile.current_location,
        house_no: profile.address?.house_no,
        street: profile.address?.street,
        city: profile.address?.city,
        state: profile.address?.state,
        country: profile.address?.country,
        pin_code: profile.address?.pin_code,
    })

    const cancelButtonRef = useRef(null)
    const handleClose = () => {
        setOpen(false);
        onClose();
    }

    const handleSubmit = () => {
        axios.patch(updatePersonalInfo, form).then(res => {
            console.log(res);   
            dispatch(changeCandidateProfile(res.data.updatedUser))
            setOpen(false);
            onClose();
        }).catch((err) => {
            console.log(err.response.data.errors[0].msg);
            setError(err.response.data.errors[0].msg); // Set the error state
            setTimeout(() => {
                setError(null);
            }, 8000);
        })

    }


    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={handleClose}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">

                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                Profile Information
                                            </Dialog.Title>

                                        </div>
                                    </div>
                                </div>
                                <form>
                                    <div className="grid grid-cols-1 gap-y-1 gap-x-5 mt-4 sm:grid-cols-2 p-5 pro-text">
                                        <div>
                                            <label className="text-gray-700 text-sm" htmlFor="username">
                                                Full name
                                            </label>
                                            <input
                                                id="user_name"
                                                type="text"
                                                name='user_name'
                                                placeholder='Enter full name'
                                                value={form.user_name}
                                                onChange={(e) => setForm({ ...form, user_name: e.target.value })}
                                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="startDate"
                                                className="block text-sm text-gray-500"
                                            >
                                                Date of Birth
                                            </label>
                                            <input
                                                type="date"

                                                name='date_of_birth'
                                              
                                                onChange={(e) => setForm({ ...form, date_of_birth: e.target.value })}
                                                className="block  mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-gray-700 text-sm" htmlFor="username">
                                                Email Address
                                            </label>
                                            <input
                                                id="username"
                                                type="email"
                                                name='email'
                                                placeholder='Enter email address'
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-gray-700 text-sm" htmlFor="username">
                                                Phone Number
                                            </label>
                                            <input
                                                id="phone"
                                                type="number"
                                                name='phone_number'
                                                placeholder='Contact number '
                                                value={form.phone_number}
                                                onChange={(e) => setForm({ ...form, phone_number: e.target.value })}
                                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="countries"
                                                className="block mb-2 text-sm font-medium text-gray-900 "
                                            >
                                                Gender
                                            </label>
                                            <select
                                                id="countries"
                                                onChange={(e) => setForm({ ...form, gender: e.target.value })}
                                                value={form.gender}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                            >
                                                {/* <option selected="">Choose </option> */}
                                                <option defaultValue value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label
                                                className="text-gray-700 text-sm"
                                                htmlFor="emailAddress"
                                            >
                                                Location
                                            </label>
                                            <input
                                                id="emailAddress"
                                                type="text"
                                                name='current_location'
                                                placeholder='Your current location '
                                                value={form.current_location}
                                                onChange={(e) => setForm({ ...form, current_location: e.target.value })}
                                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                            />
                                        </div>

                                        <div className=' md:col-span-2 ' >

                                            <label
                                                className="text-gray-700 text-sm"
                                                htmlFor="CV"
                                            >
                                                Address
                                            </label>
                                            <div className='grid gap-y-1 gap-x-5 grid-cols-1 md:grid-cols-2'>

                                                <input  
                                                    id="address"
                                                    type="text"
                                                    name='house_no'
                                                    placeholder='House No '
                                                    value={form.house_no}
                                                    onChange={(e) => setForm({ ...form, house_no: e.target.value })}
                                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                                />
                                                <input
                                                    id="address"
                                                    type="text"
                                                    placeholder='Street '
                                                    value={form.street}
                                                    onChange={(e) => setForm({ ...form, street: e.target.value })}
                                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                                />
                                                <input
                                                    id="address"
                                                    type="text"
                                                    placeholder='City '
                                                    value={form.city}
                                                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                                />
                                                <input
                                                    id="address"
                                                    type="text"
                                                    placeholder='State '
                                                    value={form.state}
                                                    onChange={(e) => setForm({ ...form, state: e.target.value })}
                                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                                />
                                                <input
                                                    id="address"
                                                    type="text"
                                                    placeholder='Country '
                                                    value={form.country}
                                                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                                />
                                                <input
                                                    id="address"
                                                    type="text"
                                                    placeholder='Post code '
                                                    value={form.pin_code}
                                                    onChange={(e) => setForm({ ...form, pin_code: e.target.value })}
                                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                                />


                                            </div>





                                        </div>


                                        {error && (
                                            <p className='text-red-500'>
                                                {error}
                                            </p>
                                        )}

                                    </div>

                                </form>

                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={handleClose}
                                    // ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
