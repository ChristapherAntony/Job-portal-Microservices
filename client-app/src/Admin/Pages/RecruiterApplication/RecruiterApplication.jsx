import "./recruiterApplication.scss";
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar/NavBar";
import Heading from "../../Components/Heading/Heading";
import Table from "../../Components/TableAplication/Table";
import { useParams } from 'react-router-dom';


const RecruiterApplication = () => {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <NavBar />
        <Heading text={"View recruiters application"} />
        <Table/>
      </div>
    </div>
  );
};

export default RecruiterApplication;





