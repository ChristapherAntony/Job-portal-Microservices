import "./applicationDetails.scss";
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar/NavBar";
import Heading from "../../Components/Heading/Heading";
import Table from "../../Components/TableAplication/Table";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import axios from "axios";
import { applicationDetails } from "../../../utils/Constants";

const ApplicationDetails = () => {
    const { id } = useParams();
    useEffect(() => {
        axios.get(applicationDetails(id)).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        })
    })
    return (
        <div className="list">
            <SideBar />
            <div className="listContainer">
                <NavBar />
                <Heading text={"Details"} />
                dfdshjfhajksdhf
            </div>
        </div>
    );
};

export default ApplicationDetails;
