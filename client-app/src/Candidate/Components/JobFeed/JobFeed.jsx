import Card from "./Card";
import Filter from "./Filter";
import Jobs from "./Jobs";

import './css/styles.css'
import { useEffect, useState } from "react";
import axios from "axios";
// import './css/tailwind.min.css'




export default function JobFeed() {

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        axios.get('/api/v1/jobs').then(response => {
            setJobs(response.data);
        }).catch(error => {
            console.log(error);
        });

    }, [])


    return (
        <div className="outer1">
            <section className="relative  md:py-10 py-16">
                <div className="mycontainer ">
                    <div className="grid bg-white  rounded-xl md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <Filter />
                        <Jobs jobs={jobs} />
                    </div>
                </div>


            </section>
            {/*end section*/}


        </div>
    );
}
