

import "./Candidates.scss";
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar/NavBar";
import Heading from "../../Components/Heading/Heading";
import Table from "../../Components/Table/Table";
import StickyHeadTable from "../../Components/NewTable/NewTable";
import Table2 from "../../Components/Table/Booststrap";


const Candidates = () => {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <NavBar />
        <Heading text={"View all Candidates"} />

        <Table/>
      </div>
    </div>
  );
};

export default Candidates;
