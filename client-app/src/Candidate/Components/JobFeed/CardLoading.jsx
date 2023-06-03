import React from 'react'

function Card() {
    return (
        <div className="group relative overflow-hidden bg-white shadow hover:shadow-md  hover:-mt-2 rounded-md transition-all duration-500 h-fit">
            <div role="status" className=" box p-5 space-y-2.5 animate-pulse max-w-lg">
                <div className="flex items-center w-full space-x-2">
                    <div className="h-2.5 bg-gray-200 rounded-full  w-32" />
                    <div className="h-2.5 bg-gray-300 rounded-full  w-24" />
                    <div className="h-2.5 bg-gray-300 rounded-full  w-full" />
                </div>
                <div className="flex items-center w-full space-x-2 max-w-[480px]">
                    <div className="h-2.5 bg-gray-200 rounded-full  w-full" />
                    <div className="h-2.5 bg-gray-300 rounded-full  w-full" />
                    <div className="h-2.5 bg-gray-300 rounded-full  w-24" />
                </div>
                <div className="flex items-center w-full space-x-2 max-w-[400px]">
                    <div className="h-2.5 bg-gray-300 rounded-full  w-full" />
                    <div className="h-2.5 bg-gray-200 rounded-full  w-80" />
                    <div className="h-2.5 bg-gray-300 rounded-full  w-full" />
                </div>
                <div className="flex items-center w-full space-x-2 max-w-[480px]">
                    <div className="h-2.5 bg-gray-200 rounded-full  w-full" />
                    <div className="h-2.5 bg-gray-300 rounded-full  w-full" />
                    <div className="h-2.5 bg-gray-300 rounded-full  w-24" />
                </div>
                <div className="flex items-center w-full space-x-2 max-w-[440px]">
                    <div className="h-2.5 bg-gray-300 rounded-full  w-32" />
                    <div className="h-2.5 bg-gray-300 rounded-full  w-24" />
                    <div className="h-2.5 bg-gray-200 rounded-full  w-full" />
                </div>
                <div className="flex items-center w-full space-x-2 max-w-[360px]">
                    <div className="h-2.5 bg-gray-300 rounded-full  w-full" />
                    <div className="h-2.5 bg-gray-200 rounded-full  w-80" />
                    <div className="h-2.5 bg-gray-300 rounded-full  w-full" />
                </div>
                <span className="sr-only">Loading...</span>
            </div>
        </div >
    )
}




function CardLoading({ count }) {
    const loadingCards = []
    for (let i = 0; i < count; i++) {
        loadingCards.push(<Card key={i} />)
    }
    return loadingCards
}

export default CardLoading