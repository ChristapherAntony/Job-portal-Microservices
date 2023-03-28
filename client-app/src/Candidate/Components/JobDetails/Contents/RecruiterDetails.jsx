import React from 'react'


function RecruiterDetails({ data }) {
    const company = data.recruiter
    return (
        <div class="shadow  rounded-md bg-white  sticky top-20">

            <div class="p-6">
                <h5 class="text-lg font-semibold">Recruiter</h5>
            </div>
            <div class="p-6 border-t border-slate-100 ">
                <ul class="list-none">
                    <li class="flex items-center">
                        <i data-feather="clock" class="h-5 w-5"></i>

                        <div class="ltr:ml-4 rtl:mr-4">
                            <p class="font-medium">Name:</p>
                            <span class="text-blue-600 font-medium text-sm">{data.recruiter.user_name}</span>
                        </div>
                    </li>
                    <li class="flex items-center mt-3">
                        <i data-feather="monitor" class="h-5 w-5"></i>

                        <div class="ltr:ml-4 rtl:mr-4">
                            <p class="font-medium">Email:</p>
                            <span class="text-blue-600 font-medium text-sm">{data.recruiter.email}</span>
                        </div>
                    </li>




                </ul>
            </div>
        </div>
    )
}

export default RecruiterDetails