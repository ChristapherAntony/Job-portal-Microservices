
import "./Home.scss";
// import Widget from "../../components/widget/Widget";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
// import Table from "../../components/table/Table";
import SideBar from "../../Components/SideBar/SideBar";
import NavBar from "../../Components/NavBar/NavBar";
import Heading from "../../Components/Heading/Heading";
import Widget from "../../Components/Widget/Widget";


const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <Heading text={"Over View"} />
        
        <div className="widgets">
          <Widget type="candidates" />
          <Widget type="recruiters" />
          <Widget type="jobs" />
          <Widget type="applications" />
        </div>

      </div>
    </div>
  );
};

export default Home;
