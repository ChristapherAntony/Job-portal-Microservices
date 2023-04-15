import React from 'react'
import { useSelector } from 'react-redux'
import LineSkeleton from '../../Skeleton/LineSkeleton'

function JobDescription({ data }) {
    const isLoading = useSelector(state => state.loading)

    return (
        <div>
            <h5 className="text-lg font-semibold mt-6">Job Description:</h5>
            {isLoading ? (
                <LineSkeleton count={5}/>
            ): (
                    <p className = "text-slate-400 mt-4">
                { data }
            </p>
    )
}


        </div >
    )
}

export default JobDescription