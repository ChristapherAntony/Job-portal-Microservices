import "./applicationDetails.scss";
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar/NavBar";
import Heading from "../../Components/Heading/Heading";
import {Details}  from "../../Components/ApplicationDetails/ApplicationDetails";


const ApplicationDetails = () => {

    return (
        <div className="list">
            <SideBar />
            <div className="listContainer">
                <NavBar />
                <Heading text={"Recruiter profile"} />
                <Details/>
            </div>
        </div>
    );
};

export default ApplicationDetails;
