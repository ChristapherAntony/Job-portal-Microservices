import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { signOut } from '../../utils/Constants'



export default function NotVerified() {
    const navigate = useNavigate()
    const logout = () => {
        axios.post(signOut).then(res => {
            navigate('/')
        }).catch(err => {
            console.log(err.response.data.errors[0].msg);
        })
    }

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">

                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Verification pending...</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Profile Under Review
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Thank you for submitting your profile. Our team is currently reviewing it, and we will be in touch soon. Please check back later for updates.

                    </p>

                    <button onClick={logout} type="button" class="text-white mt-10 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Logout</button>

                </div>

            </div>
        </div>
    )
}
