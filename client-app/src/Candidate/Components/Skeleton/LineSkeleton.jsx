import React from 'react'




function Line() {
    return (
        <li className="w-full h-3.5 bg-gray-200 rounded-md " />
    )
}

function LineSkeleton({ count }) {
    const loadingLines = []
    for (let i = 0; i < count; i++) {
        loadingLines.push(<Line key={i} />)
    }
    return (
        <div className='p-3'>
            <h3
                className="h-4 bg-gray-200 rounded-md -5  animate-pulse"
                style={{ width: "40%" }}
            />
            <ul className="mt-5 space-y-3 animate-pulse">
                {loadingLines}
            </ul>
        </div>
    )
}

export default LineSkeleton