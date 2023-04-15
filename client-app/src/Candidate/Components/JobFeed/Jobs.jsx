import React, { useState } from 'react'
import Card from './Card'
import Pagination from '../Pagination/Pagination';
import { useEffect } from 'react';
import CardLoading from './CardLoading';


function Jobs({ jobs, page, pages, changePage, handleRefresh, loading }) {



    return (
        <div className="lg:col-span-8 md:col-span-6">
            <div className="grid grid-cols-1 gap-[30px]">

                
                {loading ? (
                    <CardLoading count={5} />
                ) : (
                    jobs?.map((data, index) => <Card data={data} index={index} handleRefresh={handleRefresh} />)
                )}
            </div>
            <Pagination page={page} pages={pages} changePage={changePage} />
        </div>
    )
}

export default Jobs