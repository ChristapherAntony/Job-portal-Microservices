import React from 'react'




function Line() {


    return (

        <li className="w-full h-4 bg-gray-200 rounded-md " />

    )
}




function LineSkeleton({ count }) {
    const loadingLines = []
    for (let i = 0; i < count; i++) {
        loadingLines.push(<Line key={i} />)
    }
    return (
        <>
            <h3
                className="h-4 bg-gray-200 rounded-md  animate-pulse"
                style={{ width: "40%" }}
            />
            <ul className="mt-5 space-y-3 animate-pulse">
                {loadingLines}
            </ul>
        </>
    )
}

export default LineSkeleton