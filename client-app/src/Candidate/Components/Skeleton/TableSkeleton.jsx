
import React from 'react'

function Rows() {
    return (
        <div className="flex items-center justify-between">
            <div>
                <div className="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5" />
                <div className="w-32 h-2 bg-gray-200 rounded-full " />
            </div>
            <div>
                <div className="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5" />
                <div className="w-32 h-2 bg-gray-200 rounded-full " />
            </div>
            <div>
                <div className="h-2.5 bg-gray-300 rounded-full  w-24 mb-2.5" />
                <div className="w-32 h-2 bg-gray-200 rounded-full " />
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12" />
        </div>
    )
}

function TableSkeleton({ rows=10 }) {
    const loadingLines = []
    for (let i = 0; i < rows; i++) {
        loadingLines.push(<Rows key={i} />)
    }
    return (
        <div
            role="status"
            className=" p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse  md:p-6 "
        >
            {loadingLines}
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default TableSkeleton