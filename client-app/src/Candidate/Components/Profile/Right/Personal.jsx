import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import EditPenButton from '../../buttons/EditPenButton'
import PersonalInfoModal from '../../modals/PersonalInfoModal';
import LineSkeleton from '../../Skeleton/LineSkeleton';
import CardLoading from '../../JobFeed/CardLoading';




function Personal() {
    const isLoading = useSelector(state => state.loading)
    const profile = useSelector((state) => state.candidateprofile)
    const [showModal, setShowModal] = useState(false);
    const handleClick = () => {
        setShowModal(true);
    };
    const handleClose = () => {
        setShowModal(false);
    };


    return (
        <div className='bg-white rounded-md px-5 py-5'>
            <div class="relative">
                <h1 className='pro-h-right'>Personal Information</h1>
                <span class="absolute top-0 right-0" onClick={handleClick}>
                    <EditPenButton />
                </span>
                {showModal && <PersonalInfoModal onClose={handleClose} />}
            </div>

            <hr className="h-px my-4 bg-gray-200 border-0" />
            
            {isLoading ?(
                <LineSkeleton count={8}/>
            ):(
                <div>
                <form>
                    <div className="grid grid-cols-1 gap-y-1 gap-x-5 mt-4 sm:grid-cols-2 p-5 pro-text">
                        <div>
                            <label class="text-gray-700 text-sm">Full name</label>
                            <span class="block w-full px-4 py-1 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md">
                                 {profile.user_name}
                            </span>
                        </div>
                        <div>
                            <label class="text-gray-700 text-sm">Date of Birth</label>
                            <span placeholder='add' class="block w-full px-4 py-1 mt-2  text-gray-700 bg-white border border-gray-200 rounded-md">
                            {profile.date_of_birth?profile.date_of_birth:'.'}
                            {/* {profile.date_of_birth} */}
                            </span>
                        </div>
                        <div>
                            <label class="text-gray-700 text-sm">Email Address</label>
                            <span class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md">
                            {profile.email}
                            </span>
                        </div>
                        <div>
                            <label class="text-gray-700 text-sm">Phone Number</label>
                            <span class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md">
                            {profile.phone_number}
                            </span>
                        </div>
                        <div>
                            <label class="text-gray-700 text-sm">Gender</label>
                            <span class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md">
                            {profile.gender?profile.gender:'.'}
                            </span>
                        </div>
                        <div>
                            <label class="text-gray-700 text-sm">Location</label>
                            <span class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md">
                            {profile.current_location?profile.current_location:'.'}
                            </span>
                        </div>

                        <div className=' md:col-span-2 ' >

                            <label class="text-gray-700 text-sm">Address</label>
                            <div className='grid gap-y-1 gap-x-5 grid-cols-1 md:grid-cols-2'>

                                <span class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md">
                                {profile?.address?.house_no?profile.address.house_no:'.'}
                                </span>
                                <span class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md">
                                {profile?.address?.street?profile.address.street:'.'}
                                </span>
                                <span class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md">
                                {profile?.address?.city?profile.address.city:'.'}
                                </span>
                                <span class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md">
                                {profile?.address?.state?profile.address.state:'.'}
                                </span>
                                <span class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md">
                                {profile?.address?.country?profile.address.country:'.'}
                                </span>
                                <span class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md">
                                {profile?.address?.pin_code?profile.address.pin_code:'.'}
                                </span>


                            </div>





                        </div>




                    </div>

                </form>
            </div>
            )}
            
        </div>
    )
}

export default Personal