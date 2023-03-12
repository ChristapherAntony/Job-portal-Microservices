

import "./Recruiters.scss";
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar/NavBar";
import Heading from "../../Components/Heading/Heading";
import Table from "../../Components/Table/Table";
import StickyHeadTable from "../../Components/NewTable/NewTable";
import Table2 from "../../Components/Table/Booststrap";
import TableRecruiters from "../../Components/TableRecruiters/TableRecruiters";
import CollapsibleTable from "../../Components/TableRecruiters/TableRecruiters";


const Recruiters = () => {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <NavBar />
        <Heading text={"View all recruiters"} />

        {/* <TableRecruiters/> */}
        <CollapsibleTable/>
      </div>
    </div>
  );
};

export default Recruiters;
